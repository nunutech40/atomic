import './styles/global.css';
import { initTheme } from './core/theme';
import { initRouter, addRoute, setCleanup } from './core/router';
import { renderNav } from './components/Nav';
import { renderPeriodicTable } from './components/PeriodicTable';
import { renderElementDetail } from './components/ElementDetail';
import { renderMoleculeBuilder } from './components/MoleculeBuilder';
import { renderPhenomenonStory } from './components/PhenomenonStory';


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
}

renderNav(navContainer, () => { }, rerender);

addRoute('/', () => {
    if (tableCleanup) { tableCleanup(); tableCleanup = null; }
    main.innerHTML = '';
    tableCleanup = renderPeriodicTable(main) || null;
    setCleanup(() => { if (tableCleanup) { tableCleanup(); tableCleanup = null; } });
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
    renderPhenomena(main);
    setCleanup(() => { });
});

addRoute('/phenomena/:id', (params) => {
    main.innerHTML = '';
    const cleanup = renderPhenomenonStory(main, params?.id ?? '');
    setCleanup(cleanup);
});


initRouter();
