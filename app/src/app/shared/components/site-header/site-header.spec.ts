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

  it('renders compact dropdowns for language and theme selection', () => {
    const languageSelect = fixture.nativeElement.querySelector(
      '[data-testid="language-select"]',
    ) as HTMLSelectElement;
    const themeSelect = fixture.nativeElement.querySelector(
      '[data-testid="theme-select"]',
    ) as HTMLSelectElement;

    expect(languageSelect).toBeTruthy();
    expect(languageSelect.value).toBe('de');
    expect(themeSelect).toBeTruthy();
    expect(themeSelect.value).toBe('dark');
    expect(fixture.nativeElement.querySelector('[data-testid="language-toggle"]')).toBeNull();
    expect(fixture.nativeElement.querySelector('[data-testid="theme-toggle"]')).toBeNull();
  });

  it('changes the theme from the header dropdown', () => {
    const select = fixture.nativeElement.querySelector(
      '[data-testid="theme-select"]',
    ) as HTMLSelectElement;

    select.value = 'light';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(themeService.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('changes the language from the header dropdown', () => {
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
