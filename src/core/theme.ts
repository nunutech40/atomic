type Theme = 'dark' | 'light';
let current: Theme = (localStorage.getItem('atomic-theme') as Theme) || 'dark';

export function initTheme() { document.documentElement.setAttribute('data-theme', current); }
export function getTheme(): Theme { return current; }
export function toggleTheme() {
    current = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('atomic-theme', current);
    document.documentElement.setAttribute('data-theme', current);
}
