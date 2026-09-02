import { routes } from './app.routes';
import { PortfolioPage } from './features/portfolio-page/portfolio-page';

describe('application routes', () => {
  it('loads the portfolio page at the root path', async () => {
    const rootRoute = routes.find((route) => route.path === '');

    expect(rootRoute?.loadComponent).toBeDefined();

    const loaded = await rootRoute!.loadComponent!();
    const component = 'default' in loaded ? loaded.default : loaded;

    expect(component).toBe(PortfolioPage);
  });

  it('redirects unknown URLs to the portfolio page', () => {
    const fallbackRoute = routes.find((route) => route.path === '**');

    expect(fallbackRoute?.redirectTo).toBe('');
  });
});
