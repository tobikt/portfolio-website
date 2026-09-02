import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeService } from '../../../core/services/theme.service';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  let fixture: ComponentFixture<SiteHeader>;
  let themeService: ThemeService;

  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');

    await TestBed.configureTestingModule({
      imports: [SiteHeader],
    }).compileComponents();

    themeService = TestBed.inject(ThemeService);
    fixture = TestBed.createComponent(SiteHeader);
    fixture.detectChanges();
  });

  it('renders a theme toggle with the current theme label', () => {
    const button = fixture.nativeElement.querySelector(
      '[data-testid="theme-toggle"]',
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();
    expect(button.getAttribute('aria-label')).toBe('Zum hellen Modus wechseln');
  });

  it('toggles the theme from the header', () => {
    const button = fixture.nativeElement.querySelector(
      '[data-testid="theme-toggle"]',
    ) as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(themeService.theme()).toBe('light');
    expect(button.getAttribute('aria-label')).toBe('Zum dunklen Modus wechseln');
  });
});
