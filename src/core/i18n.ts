import en from '../data/i18n/en';
import id from '../data/i18n/id';

type Lang = 'en' | 'id';
const langs = { en, id };
let current: Lang = (localStorage.getItem('atomic-lang') as Lang) || 'id';

export function t(path: string): string {
    const keys = path.split('.');
    let val: unknown = langs[current];
    for (const k of keys) { val = (val as Record<string, unknown>)?.[k]; }
    return (val as string) ?? path;
}
export function getLang(): Lang { return current; }
export function setLang(l: Lang) { current = l; localStorage.setItem('atomic-lang', l); }
export function toggleLang() { setLang(current === 'en' ? 'id' : 'en'); }
