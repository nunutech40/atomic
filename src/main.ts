import './styles/global.css';
import { initTheme } from './core/theme';
import { initRouter, addRoute, setCleanup, resolve } from './core/router';
import { renderNav } from './components/Nav';
import { renderDashboard } from './components/Dashboard';
import { renderExplore } from './components/Explore';
import { renderElementDetail } from './components/ElementDetail';
import { renderMoleculeBuilder } from './components/MoleculeBuilder';
import { renderPhenomenonStory } from './components/PhenomenonStory';
import { renderDiscovererStory } from './components/DiscovererStory';
import { renderPhenomenaList } from './components/PhenomenaList';
import { renderAtomHistory } from './components/AtomHistory';


initTheme();

const app = document.getElementById('app')!;
app.innerHTML = `
  <div id="nav-container"></div>
  <main class="main-content" id="main-container"></main>
`;

const navContainer = document.getElementById('nav-container')!;
const main = document.getElementById('main-container')!;

let tableCleanup: (() => void) | null = null;

function rerender() {
    renderNav(navContainer, () => { }, rerender);
    resolve(); // re-render current page so content translates too
}

renderNav(navContainer, () => { }, rerender);

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


initRouter();
