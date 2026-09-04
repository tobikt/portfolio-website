import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject, map as rxMap, Observable } from 'rxjs';

export type Language = 'de' | 'en';

type TranslationKey =
  | 'skipLink'
  | 'navProfile'
  | 'navSkills'
  | 'navProjects'
  | 'navExperience'
  | 'navContact'
  | 'themeLight'
  | 'themeDark'
  | 'languageLabel'
  | 'languageSwitchLabel'
  | 'heroMeta'
  | 'heroTitle'
  | 'heroText'
  | 'heroPrimaryCta'
  | 'heroSecondaryCta'
  | 'aboutKicker'
  | 'skillsKicker'
  | 'skillsTitle'
  | 'skillsCount'
  | 'skillsShowAll'
  | 'skillsShowLess'
  | 'projectsKicker'
  | 'projectsTitle'
  | 'experienceKicker'
  | 'experienceTitle'
  | 'experienceCurrent'
  | 'contactKicker'
  | 'contactTitle'
  | 'contactText'
  | 'contactCta'
  | 'footerText';

const STORAGE_KEY = 'portfolio-language';

const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  de: {
    skipLink: 'Zum Inhalt springen',
    navProfile: 'Profil',
    navSkills: 'Skills',
    navProjects: 'Projekte',
    navExperience: 'Erfahrung',
    navContact: 'Kontakt',
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    languageLabel: 'Sprache',
    languageSwitchLabel: 'Switch language to English',
    heroMeta: 'Tobias Kükelheim · Senior Software Engineer / Cloud Architect · Raum Stuttgart',
    heroTitle: 'Software, die man später noch anfassen will.',
    heroText:
      'Ich plane und entwickle AWS-nahe Anwendungen, Plattformbausteine und Tools für Cloud-, Engineering- und Automotive-Kontexte — pragmatisch, wartbar und betrieblich denkbar.',
    heroPrimaryCta: 'Arbeiten ansehen',
    heroSecondaryCta: 'Profil lesen',
    aboutKicker: '01 · Profil',
    skillsKicker: '02 · Kenntnisse',
    skillsTitle: 'Thematisch geordnet — von Cloud bis Automotive.',
    skillsCount: 'Kenntnisse',
    skillsShowAll: 'Alle {count} anzeigen',
    skillsShowLess: 'Weniger anzeigen',
    projectsKicker: '03 · Projekte',
    projectsTitle: 'Was gerade entsteht.',
    experienceKicker: '04 · Erfahrung',
    experienceTitle: 'Stationen und Praxis.',
    experienceCurrent: 'aktuell',
    contactKicker: '05 · Kontakt',
    contactTitle: 'Wenn es konkret wird: melden.',
    contactText: 'Für Projekte, Austausch oder Feedback zum Portfolio.',
    contactCta: 'E-Mail schreiben',
    footerText: 'Angular Portfolio · Inhalte aus lokalen Daten-Dateien.',
  },
  en: {
    skipLink: 'Skip to content',
    navProfile: 'Profile',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navContact: 'Contact',
    themeLight: 'Light',
    themeDark: 'Dark',
    languageLabel: 'Language',
    languageSwitchLabel: 'Sprache auf Deutsch wechseln',
    heroMeta: 'Tobias Kükelheim · Senior Software Engineer / Cloud Architect · Stuttgart area',
    heroTitle: 'Software that remains maintainable after handover.',
    heroText:
      'I plan and build AWS-adjacent applications, platform components and tools for cloud, engineering and automotive contexts — pragmatic, maintainable and operable.',
    heroPrimaryCta: 'View work',
    heroSecondaryCta: 'Read profile',
    aboutKicker: '01 · Profile',
    skillsKicker: '02 · Skills',
    skillsTitle: 'Grouped by topic — from cloud to automotive.',
    skillsCount: 'skills',
    skillsShowAll: 'Show all {count}',
    skillsShowLess: 'Show less',
    projectsKicker: '03 · Projects',
    projectsTitle: 'Current work.',
    experienceKicker: '04 · Experience',
    experienceTitle: 'Roles and practice.',
    experienceCurrent: 'present',
    contactKicker: '05 · Contact',
    contactTitle: 'If it gets concrete: reach out.',
    contactText: 'For projects, exchange or feedback on the portfolio.',
    contactCta: 'Write email',
    footerText: 'Angular portfolio · Content loaded from local data files.',
  },
};

function mapLanguageToDataPath(source: Observable<Language>): Observable<string> {
  return source.pipe(rxMap((language) => `data/${language}`));
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly currentLanguage = signal<Language>(this.getStoredLanguage());
  private readonly currentLanguage$ = new BehaviorSubject<Language>(this.currentLanguage());
  readonly language = this.currentLanguage.asReadonly();
  readonly dataPath = computed(() => `data/${this.currentLanguage()}`);
  readonly dataPath$ = this.currentLanguage$.asObservable().pipe(mapLanguageToDataPath);

  constructor() {
    this.applyLanguage(this.currentLanguage());
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.currentLanguage$.next(language);
    localStorage.setItem(STORAGE_KEY, language);
    this.applyLanguage(language);
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage() === 'de' ? 'en' : 'de');
  }

  t(key: TranslationKey, params: Record<string, string | number> = {}): string {
    return Object.entries(params).reduce(
      (text, [name, value]) => text.replace(`{${name}}`, String(value)),
      TRANSLATIONS[this.currentLanguage()][key],
    );
  }

  private getStoredLanguage(): Language {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'de';
  }

  private applyLanguage(language: Language): void {
    document.documentElement.lang = language;
  }
}
