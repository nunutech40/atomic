// ── Feedback Widget — floating suggestion box ────────────────────────
import { config } from '../core/config';
import { getAccessToken } from '../core/auth';
import { getLang } from '../core/i18n';

let isOpen = false;
let widgetContainer: HTMLElement | null = null;

const EMOJIS = [
    { value: 1, emoji: '😢', label: 'Buruk' },
    { value: 2, emoji: '😕', label: 'Kurang' },
    { value: 3, emoji: '😐', label: 'Biasa' },
    { value: 4, emoji: '😊', label: 'Bagus' },
    { value: 5, emoji: '😍', label: 'Mantap!' },
];

interface FeedbackState {
    rating: number | null;
    category: string;
    message: string;
    sending: boolean;
    sent: boolean;
    error: string | null;
}

let state: FeedbackState = {
    rating: null,
    category: 'saran',
    message: '',
    sending: false,
    sent: false,
    error: null,
};

function resetState() {
    state = { rating: null, category: 'saran', message: '', sending: false, sent: false, error: null };
}

// ── Mount ────────────────────────────────────────────────────────────

export function mountFeedbackWidget() {
    if (widgetContainer) return; // already mounted

    widgetContainer = document.createElement('div');
    widgetContainer.id = 'feedback-widget-root';
    document.body.appendChild(widgetContainer);

    renderButton();
}

export function unmountFeedbackWidget() {
    if (widgetContainer) {
        widgetContainer.remove();
        widgetContainer = null;
        isOpen = false;
        resetState();
    }
}

// ── Button (floating pill) ───────────────────────────────────────────

function renderButton() {
    if (!widgetContainer) return;
    const isId = getLang() === 'id';

    widgetContainer.innerHTML = `
    <button id="feedback-btn" class="feedback-btn ${isOpen ? 'feedback-btn--open' : ''}" aria-label="Feedback">
      <span class="feedback-btn-icon">${isOpen ? '✕' : '💡'}</span>
      <span class="feedback-btn-label">${isId ? 'Saran' : 'Feedback'}</span>
      <span class="feedback-btn-pulse"></span>
    </button>
    ${isOpen ? renderPanel(isId) : ''}
  `;

    // Wire button toggle
    const btn = widgetContainer.querySelector('#feedback-btn');
    btn?.addEventListener('click', () => {
        isOpen = !isOpen;
        if (!isOpen) resetState();
        renderButton();
    });

    if (isOpen) {
        wirePanel();
    }
}

// ── Panel ────────────────────────────────────────────────────────────

function renderPanel(isId: boolean): string {
    if (state.sent) {
        return `
      <div class="feedback-panel feedback-panel--success">
        <div class="feedback-success-icon">🎉</div>
        <h3>${isId ? 'Terima kasih!' : 'Thank you!'}</h3>
        <p>${isId ? 'Feedback kamu sudah diterima. Kami akan terus memperbaiki Atomic.' : 'Your feedback has been received. We will keep improving Atomic.'}</p>
        <button class="feedback-done-btn" id="feedback-close">${isId ? 'Tutup' : 'Close'}</button>
      </div>
    `;
    }

    return `
    <div class="feedback-panel">
      <h3 class="feedback-panel-title">${isId ? '💡 Kotak Saran' : '💡 Suggestion Box'}</h3>
      <p class="feedback-panel-desc">${isId ? 'Bantu kami bikin Atomic lebih bagus!' : 'Help us make Atomic better!'}</p>

      <!-- Rating -->
      <div class="feedback-section">
        <label class="feedback-label">${isId ? 'Bagaimana pengalamanmu?' : 'How was your experience?'}</label>
        <div class="feedback-emojis" id="feedback-emojis">
          ${EMOJIS.map(e => `
            <button class="feedback-emoji ${state.rating === e.value ? 'feedback-emoji--active' : ''}"
                    data-value="${e.value}" title="${e.label}">
              ${e.emoji}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Category pills -->
      <div class="feedback-section">
        <label class="feedback-label">${isId ? 'Kategori' : 'Category'}</label>
        <div class="feedback-categories" id="feedback-categories">
          <button class="feedback-cat ${state.category === 'saran' ? 'feedback-cat--active' : ''}" data-cat="saran">
            💡 ${isId ? 'Saran' : 'Suggestion'}
          </button>
          <button class="feedback-cat ${state.category === 'bug' ? 'feedback-cat--active' : ''}" data-cat="bug">
            🐛 Bug
          </button>
          <button class="feedback-cat ${state.category === 'pertanyaan' ? 'feedback-cat--active' : ''}" data-cat="pertanyaan">
            ❓ ${isId ? 'Tanya' : 'Question'}
          </button>
        </div>
      </div>

      <!-- Message -->
      <div class="feedback-section">
        <label class="feedback-label">${isId ? 'Pesan' : 'Message'}</label>
        <textarea id="feedback-message" class="feedback-textarea"
                  placeholder="${isId ? 'Tulis saran, laporan bug, atau pertanyaan kamu...' : 'Write your suggestion, bug report, or question...'}"
                  rows="4" maxlength="2000">${state.message}</textarea>
        <span class="feedback-charcount"><span id="feedback-charcount">${state.message.length}</span>/2000</span>
      </div>

      <!-- Error -->
      ${state.error ? `<div class="feedback-error">${state.error}</div>` : ''}

      <!-- Submit -->
      <button class="feedback-submit" id="feedback-submit" ${state.sending ? 'disabled' : ''}>
        ${state.sending
            ? '<span class="feedback-spinner"></span>'
            : (isId ? '🚀 Kirim Feedback' : '🚀 Send Feedback')}
      </button>
    </div>
  `;
}

// ── Wire Panel Events ────────────────────────────────────────────────

function wirePanel() {
    if (!widgetContainer) return;

    // Close button (success state)
    const closeBtn = widgetContainer.querySelector('#feedback-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            isOpen = false;
            resetState();
            renderButton();
        });
        return;
    }

    // Rating emojis
    const emojiContainer = widgetContainer.querySelector('#feedback-emojis');
    emojiContainer?.addEventListener('click', (e) => {
        const target = (e.target as HTMLElement).closest('.feedback-emoji') as HTMLElement;
        if (target) {
            state.rating = parseInt(target.dataset.value || '0');
            renderButton();
        }
    });

    // Category pills
    const catContainer = widgetContainer.querySelector('#feedback-categories');
    catContainer?.addEventListener('click', (e) => {
        const target = (e.target as HTMLElement).closest('.feedback-cat') as HTMLElement;
        if (target) {
            state.category = target.dataset.cat || 'saran';
            renderButton();
        }
    });

    // Message textarea
    const textarea = widgetContainer.querySelector('#feedback-message') as HTMLTextAreaElement;
    const charcount = widgetContainer.querySelector('#feedback-charcount');
    if (textarea) {
        textarea.addEventListener('input', () => {
            state.message = textarea.value;
            if (charcount) charcount.textContent = String(textarea.value.length);
        });
        // Auto-focus
        setTimeout(() => textarea.focus(), 100);
    }

    // Submit
    const submitBtn = widgetContainer.querySelector('#feedback-submit');
    submitBtn?.addEventListener('click', submitFeedback);
}

// ── Submit ────────────────────────────────────────────────────────────

async function submitFeedback() {
    const isId = getLang() === 'id';

    if (!state.message.trim() || state.message.trim().length < 3) {
        state.error = isId ? 'Pesan minimal 3 karakter' : 'Message must be at least 3 characters';
        renderButton();
        return;
    }

    state.sending = true;
    state.error = null;
    renderButton();

    try {
        const token = getAccessToken();
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const res = await fetch(`${config.apiBase}/api/feedback`, {
            method: 'POST',
            headers,
            credentials: 'include',
            body: JSON.stringify({
                category: state.category,
                rating: state.rating,
                message: state.message.trim(),
                page_url: window.location.pathname,
            }),
        });

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            const msg = data?.error?.message || (isId ? 'Gagal mengirim feedback' : 'Failed to send feedback');
            state.error = msg;
            state.sending = false;
            renderButton();
            return;
        }

        state.sent = true;
        state.sending = false;
        renderButton();
    } catch {
        state.error = isId ? 'Gagal terhubung ke server' : 'Failed to connect to server';
        state.sending = false;
        renderButton();
    }
}
