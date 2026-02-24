import './styles/global.css';
import { initTheme } from './core/theme';
import { initAuth, isLoggedIn, onAuthChange } from './core/auth';
import { initRouter, addRoute, setCleanup, resolve, navigate } from './core/router';
import { renderNav } from './components/Nav';
import { renderDashboard } from './components/Dashboard';
import { renderExplore } from './components/Explore';
import { renderElementDetail } from './components/ElementDetail';
import { renderMoleculeBuilder } from './components/MoleculeBuilder';
import { renderPhenomenonStory } from './components/PhenomenonStory';
import { renderDiscovererStory } from './components/DiscovererStory';
import { renderPhenomenaList } from './components/PhenomenaList';
import { renderAtomHistory } from './components/AtomHistory';
import { renderCompositionPage } from './components/CompositionPage';
import { renderOnboarding, hasSeenOnboarding } from './components/Onboarding';
import { renderLearnList } from './components/LearnList';
import { renderLearnModule } from './components/LearnModule';
import { renderAuthGate, renderSubscriberGate, renderUserBadge, wireUserBadge } from './components/AuthGate';
import { mountFeedbackWidget, unmountFeedbackWidget } from './components/FeedbackWidget';


initTheme();

const app = document.getElementById('app')!;

// ── Show loading state while checking auth ───────────────────────────
app.innerHTML = `
  <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;gap:12px;color:var(--text-3)">
    <div class="auth-spinner" style="border-color:var(--border);border-top-color:var(--accent)"></div>
    <span style="font-size:14px">Loading...</span>
  </div>
`;

// ── Check if user is already logged in (has valid cookie) ────────────
initAuth().then((loggedIn) => {
    if (loggedIn) {
        bootApp();
    } else {
        showGate();
    }
});

// ── Auth Gate — shown when not logged in ─────────────────────────────
function showGate() {
    app.innerHTML = '';
    unmountFeedbackWidget();

    const isSubscriberLogin = window.location.pathname === '/login';

    if (isSubscriberLogin) {
        renderSubscriberGate(app, () => {
            app.innerHTML = '';
            window.history.replaceState({}, '', '/');
            bootApp();
        });
    } else {
        renderAuthGate(app, () => {
            app.innerHTML = '';
            bootApp();
        });
    }
}

// ── Full App — shown after auth ──────────────────────────────────────
function bootApp() {
    app.innerHTML = `
    <div id="nav-container"></div>
    <main class="main-content" id="main-container"></main>
  `;

    const navContainer = document.getElementById('nav-container')!;
    const main = document.getElementById('main-container')!;

    let tableCleanup: (() => void) | null = null;

    function rerender() {
        renderNavWithUser(navContainer, rerender);
        resolve();
    }

    renderNavWithUser(navContainer, rerender);

    addRoute('/', () => {
        if (tableCleanup) { tableCleanup(); tableCleanup = null; }
        main.innerHTML = '';
        const cleanup = renderDashboard(main);
        setCleanup(cleanup);
    });

    addRoute('/explore', () => {
        if (tableCleanup) { tableCleanup(); tableCleanup = null; }
        main.innerHTML = '';
        tableCleanup = renderExplore(main) || null;
        setCleanup(() => { if (tableCleanup) { tableCleanup(); tableCleanup = null; } });
    });

    addRoute('/atom-history', () => {
        main.innerHTML = '';
        const cleanup = renderAtomHistory(main);
        setCleanup(cleanup);
    });

    addRoute('/element/:n', (params) => {
        const n = parseInt(params?.n || '1', 10);
        main.innerHTML = '';
        const cleanup = renderElementDetail(main, n);
        setCleanup(cleanup);
    });

    addRoute('/molecule', () => {
        main.innerHTML = '';
        const cleanup = renderMoleculeBuilder(main);
        setCleanup(cleanup);
    });

    addRoute('/phenomena', () => {
        main.innerHTML = '';
        renderPhenomenaList(main);
        setCleanup(() => { });
    });

    addRoute('/phenomena/:id', (params) => {
        main.innerHTML = '';
        const cleanup = renderPhenomenonStory(main, params?.id ?? '');
        setCleanup(cleanup);
    });

    addRoute('/discoverer/:sym', (params) => {
        main.innerHTML = '';
        const cleanup = renderDiscovererStory(main, params?.sym ?? '');
        setCleanup(cleanup);
    });

    addRoute('/composition/:subject', (params) => {
        main.innerHTML = '';
        const cleanup = renderCompositionPage(main, params?.subject ?? 'human');
        setCleanup(cleanup);
    });

    addRoute('/composition', () => {
        main.innerHTML = '';
        const cleanup = renderCompositionPage(main, 'human');
        setCleanup(cleanup);
    });

    addRoute('/learn', () => {
        main.innerHTML = '';
        const cleanup = renderLearnList(main);
        setCleanup(cleanup);
    });

    addRoute('/learn/:slug', (params) => {
        main.innerHTML = '';
        const cleanup = renderLearnModule(main, params?.slug ?? '');
        setCleanup(cleanup);
    });

    addRoute('/onboarding', () => {
        main.innerHTML = '';
        const cleanup = renderOnboarding(main);
        setCleanup(cleanup);
    });

    initRouter();

    // Mount feedback widget (only after login)
    mountFeedbackWidget();

    // Auto-redirect to onboarding on first visit
    if (!hasSeenOnboarding() && window.location.hash.slice(1) === '/') {
        navigate('/onboarding');
    }

    // When user logs out, show gate again
    onAuthChange(() => {
        if (!isLoggedIn()) {
            window.location.reload();
        }
    });
}

// ── Render nav with user badge ───────────────────────────────────────
function renderNavWithUser(container: HTMLElement, onLangChange: () => void) {
    renderNav(container, () => { }, onLangChange);

    // Inject user badge into nav
    const nav = container.querySelector('.nav');
    if (nav && isLoggedIn()) {
        // Add before the theme button
        const themeBtn = nav.querySelector('#theme-btn');
        if (themeBtn) {
            const badgeWrapper = document.createElement('div');
            badgeWrapper.innerHTML = renderUserBadge();
            themeBtn.parentNode!.insertBefore(badgeWrapper.firstElementChild!, themeBtn);
            wireUserBadge(container);
        }
    }
}
