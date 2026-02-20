type RouteHandler = (params?: Record<string, string>) => void;
const routes: Array<{ pattern: RegExp; handler: RouteHandler }> = [];
let currentCleanup: (() => void) | null = null;

export function addRoute(path: string, handler: RouteHandler) {
    const pattern = new RegExp('^' + path.replace(/:(\w+)/g, '(?<$1>[^/]+)') + '$');
    routes.push({ pattern, handler });
}

export function navigate(path: string) {
    window.history.pushState({}, '', '#' + path);
    resolve();
}

export function resolve() {
    if (currentCleanup) { currentCleanup(); currentCleanup = null; }
    const hash = window.location.hash.slice(1) || '/';
    for (const route of routes) {
        const match = hash.match(route.pattern);
        if (match) { route.handler(match.groups); return; }
    }
    routes[0]?.handler();
}

export function setCleanup(fn: () => void) { currentCleanup = fn; }

export function initRouter() {
    window.addEventListener('popstate', resolve);
    resolve();
}
