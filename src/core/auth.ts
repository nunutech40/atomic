// ── Auth Service — connects Atomic frontend to SAINS backend ─────────
import { config } from './config';

export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role: string;
    is_active: boolean;
}

interface AuthState {
    user: AuthUser | null;
    type: 'subscriber' | 'guest' | null;
    accessToken: string | null;
}

let state: AuthState = { user: null, type: null, accessToken: null };
let listeners: Array<() => void> = [];

// ── Persistence — store token in localStorage for session survival ──
const TOKEN_KEY = 'atomic_access_token';
const USER_KEY = 'atomic_user';

function saveToStorage() {
    if (state.accessToken) {
        localStorage.setItem(TOKEN_KEY, state.accessToken);
    } else {
        localStorage.removeItem(TOKEN_KEY);
    }
    if (state.user) {
        localStorage.setItem(USER_KEY, JSON.stringify({ user: state.user, type: state.type }));
    } else {
        localStorage.removeItem(USER_KEY);
    }
}

function loadFromStorage(): boolean {
    const token = localStorage.getItem(TOKEN_KEY);
    const userJson = localStorage.getItem(USER_KEY);
    if (token && userJson) {
        try {
            const parsed = JSON.parse(userJson);
            state.accessToken = token;
            state.user = parsed.user;
            state.type = parsed.type;
            return true;
        } catch { /* ignore */ }
    }
    return false;
}

// ── Authenticated fetch helper ───────────────────────────────────────

async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const headers = new Headers(options.headers || {});
    if (state.accessToken) {
        headers.set('Authorization', `Bearer ${state.accessToken}`);
    }
    return fetch(url, { ...options, headers, credentials: 'include' });
}

// ── Public API ───────────────────────────────────────────────────────

export function getUser(): AuthUser | null { return state.user; }
export function isLoggedIn(): boolean { return state.user !== null; }
export function getLoginType(): string | null { return state.type; }
export function getAccessToken(): string | null { return state.accessToken; }

export function onAuthChange(fn: () => void) {
    listeners.push(fn);
    return () => { listeners = listeners.filter(l => l !== fn); };
}

function notify() { listeners.forEach(fn => fn()); }

// ── Login (email + password) ─────────────────────────────────────────

export async function login(email: string, password: string): Promise<{ ok: boolean; error?: string }> {
    try {
        const res = await fetch(`${config.apiBase}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            const msg = data?.error?.message || data?.message || 'Login failed';
            return { ok: false, error: msg };
        }
        const data = await res.json();
        // Extract access_token from response body
        const accessToken = data?.data?.access_token || data?.access_token;
        if (accessToken) {
            state.accessToken = accessToken;
        }
        // Extract user from response
        const u = data?.data?.user || data?.user;
        if (u) {
            state.user = {
                id: u.id,
                email: u.email,
                name: u.name || '',
                role: u.role || 'subscriber',
                is_active: true,
            };
            state.type = 'subscriber';
        }
        saveToStorage();
        notify();
        return { ok: true };
    } catch {
        return { ok: false, error: 'Network error — is the server running?' };
    }
}

// ── Guest Login Step 1 (code + email → sends OTP) ───────────────────

export async function guestLogin(code: string, email: string): Promise<{ ok: boolean; error?: string; pendingOtp?: boolean; maskedEmail?: string }> {
    try {
        const res = await fetch(`${config.apiBase}/api/auth/guest-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ code, email }),
        });
        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            const msg = data?.error?.message || data?.message || 'Guest login failed';
            return { ok: false, error: msg };
        }
        const data = await res.json();
        const d = data?.data || data;

        // New 2-step flow: server returns pending_verification
        if (d?.pending_verification) {
            return { ok: true, pendingOtp: true, maskedEmail: d.email };
        }

        // Fallback: direct login (shouldn't happen with new backend)
        const accessToken = d?.access_token;
        if (accessToken) {
            state.accessToken = accessToken;
        }
        state.user = {
            id: 'guest',
            email: email,
            name: email.split('@')[0],
            role: 'guest',
            is_active: true,
        };
        state.type = 'guest';
        saveToStorage();
        notify();
        return { ok: true };
    } catch {
        return { ok: false, error: 'Network error — is the server running?' };
    }
}

// ── Guest Login Step 2 (verify OTP) ──────────────────────────────────

export async function guestVerify(code: string, email: string, otp: string): Promise<{ ok: boolean; error?: string }> {
    try {
        const res = await fetch(`${config.apiBase}/api/auth/guest-verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ code, email, otp }),
        });
        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            const msg = data?.error?.message || data?.message || 'OTP verification failed';
            return { ok: false, error: msg };
        }
        const data = await res.json();
        const accessToken = data?.data?.access_token || data?.access_token;
        if (accessToken) {
            state.accessToken = accessToken;
        }
        state.user = {
            id: 'guest',
            email: email,
            name: email.split('@')[0],
            role: 'guest',
            is_active: true,
        };
        state.type = 'guest';
        saveToStorage();
        notify();
        return { ok: true };
    } catch {
        return { ok: false, error: 'Network error — is the server running?' };
    }
}

// ── Register ─────────────────────────────────────────────────────────

export async function register(email: string, password: string, name: string): Promise<{ ok: boolean; error?: string }> {
    try {
        const res = await fetch(`${config.apiBase}/api/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password, name }),
        });
        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            const msg = data?.error?.message || data?.message || 'Registration failed';
            return { ok: false, error: msg };
        }
        return { ok: true };
    } catch {
        return { ok: false, error: 'Network error — is the server running?' };
    }
}

// ── Logout ───────────────────────────────────────────────────────────

export async function logout(): Promise<void> {
    try {
        await authFetch(`${config.apiBase}/api/auth/logout`, { method: 'POST' });
    } catch { /* ignore */ }
    state = { user: null, type: null, accessToken: null };
    saveToStorage();
    notify();
}

// ── Access Check ─────────────────────────────────────────────────────

export async function checkAccess(): Promise<boolean> {
    try {
        const res = await authFetch(`${config.apiBase}/api/access-check?product=${config.product}`);
        return res.ok;
    } catch {
        return false;
    }
}

// ── Fetch current user (/api/auth/me) ────────────────────────────────

export async function fetchMe(): Promise<AuthUser | null> {
    if (!state.accessToken) return null;
    try {
        const res = await authFetch(`${config.apiBase}/api/auth/me`);
        if (!res.ok) {
            // Token expired or invalid — clear state
            state = { user: null, type: null, accessToken: null };
            saveToStorage();
            return null;
        }
        const data = await res.json();
        const u = data?.data || data?.user || data;
        state.user = {
            id: u.id,
            email: u.email,
            name: u.name || '',
            role: u.role || 'subscriber',
            is_active: u.is_active ?? true,
        };
        if (!state.type) {
            state.type = u.role === 'guest' ? 'guest' : 'subscriber';
        }
        saveToStorage();
        return state.user;
    } catch {
        return null;
    }
}

// ── Init — check if already logged in (token in localStorage) ────────

export async function initAuth(): Promise<boolean> {
    // Try loading from localStorage first
    if (loadFromStorage()) {
        // Verify the token is still valid by calling /me
        const user = await fetchMe();
        if (user) {
            notify();
            return true;
        }
    }
    return false;
}
