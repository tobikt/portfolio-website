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

  it('renders language next to the title and keeps contact as the rightmost action', () => {
    const languageSelect = fixture.nativeElement.querySelector(
      '[data-testid="language-select"]',
    ) as HTMLSelectElement;
    const themeSelect = fixture.nativeElement.querySelector(
      '[data-testid="theme-select"]',
    ) as HTMLSelectElement;
    const header = fixture.nativeElement.querySelector('header') as HTMLElement;

    expect(languageSelect).toBeTruthy();
    expect(languageSelect.value).toBe('de');
    expect(themeSelect).toBeTruthy();
    expect(themeSelect.value).toBe('dark');
    expect(themeSelect.options[0].textContent?.trim()).toBe('☾');
    expect(themeSelect.options[1].textContent?.trim()).toBe('☀');
    expect(languageSelect.parentElement?.querySelector('a')?.getAttribute('href')).toBe('#hero');
    expect(themeSelect.textContent).not.toContain('Hell');
    expect(themeSelect.textContent).not.toContain('Dunkel');
    expect(header.textContent?.replace(/\s+/g, ' ').trim().endsWith('Kontakt')).toBe(true);
    expect(fixture.nativeElement.querySelector('[data-testid="language-toggle"]')).toBeNull();
    expect(fixture.nativeElement.querySelector('[data-testid="theme-toggle"]')).toBeNull();
  });

  it('changes the theme from the icon dropdown', () => {
    const select = fixture.nativeElement.querySelector(
      '[data-testid="theme-select"]',
    ) as HTMLSelectElement;

    select.value = 'light';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(themeService.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('changes the language from the title-adjacent dropdown', () => {
    const select = fixture.nativeElement.querySelector(
      '[data-testid="language-select"]',
    ) as HTMLSelectElement;

    select.value = 'en';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(languageService.language()).toBe('en');
    expect(select.value).toBe('en');
  });
});
