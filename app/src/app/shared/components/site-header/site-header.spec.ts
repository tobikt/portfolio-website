import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService } from '../../../core/services/theme.service';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  let fixture: ComponentFixture<SiteHeader>;
  let languageService: LanguageService;
  let themeService: ThemeService;

  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');

    await TestBed.configureTestingModule({
      imports: [SiteHeader],
    }).compileComponents();

    languageService = TestBed.inject(LanguageService);
    themeService = TestBed.inject(ThemeService);
    fixture = TestBed.createComponent(SiteHeader);
    fixture.detectChanges();
  });

  it('renders one-line header controls with language next to the title and contact last', () => {
    const languageToggle = fixture.nativeElement.querySelector(
      '[data-testid="language-toggle"]',
    ) as HTMLButtonElement;
    const themeToggle = fixture.nativeElement.querySelector(
      '[data-testid="theme-toggle"]',
    ) as HTMLButtonElement;
    const header = fixture.nativeElement.querySelector('header') as HTMLElement;

    expect(languageToggle).toBeTruthy();
    expect(languageToggle.textContent?.trim()).toBe('EN');
    expect(languageToggle.parentElement?.querySelector('a')?.getAttribute('href')).toBe('#hero');
    expect(themeToggle).toBeTruthy();
    expect(themeToggle.textContent?.trim()).toBe('☀');
    expect(header.textContent?.replace(/\s+/g, ' ').trim().endsWith('Kontakt')).toBe(true);
    expect(fixture.nativeElement.querySelector('[data-testid="language-select"]')).toBeNull();
    expect(fixture.nativeElement.querySelector('[data-testid="theme-select"]')).toBeNull();
  });

  it('toggles the theme from the icon button', () => {
    const button = fixture.nativeElement.querySelector(
      '[data-testid="theme-toggle"]',
    ) as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(themeService.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(button.textContent?.trim()).toBe('☾');
  });

  it('toggles the language from the title-adjacent text control', () => {
    const button = fixture.nativeElement.querySelector(
      '[data-testid="language-toggle"]',
    ) as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(languageService.language()).toBe('en');
    expect(button.textContent?.trim()).toBe('DE');
  });
});
