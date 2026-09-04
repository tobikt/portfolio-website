import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [LanguageService] });
    service = TestBed.inject(LanguageService);
  });

  it('defaults to German and exposes the matching data path', () => {
    expect(service.language()).toBe('de');
    expect(service.dataPath()).toBe('data/de');
    expect(document.documentElement.lang).toBe('de');
  });

  it('switches to English and stores the preference', () => {
    service.toggleLanguage();

    expect(service.language()).toBe('en');
    expect(service.dataPath()).toBe('data/en');
    expect(service.t('navProfile')).toBe('Profile');
    expect(localStorage.getItem('portfolio-language')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('fills translation parameters', () => {
    expect(service.t('skillsShowAll', { count: 7 })).toBe('Alle 7 anzeigen');
  });
});
