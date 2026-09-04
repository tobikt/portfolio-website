import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../../../core/services/language.service';
import { Theme, ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  template: `
    <header
      class="sticky top-0 z-50 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)]/92 backdrop-blur-xl"
    >
      <div
        class="mx-auto flex min-h-16 max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5"
      >
        <a
          class="text-base font-semibold tracking-tight text-[var(--color-text)]"
          href="#hero"
          aria-label="Zur Startsektion"
        >
          Tobias Kükelheim<span class="text-[var(--color-accent)]">.</span>
        </a>
        <div class="flex flex-wrap items-center gap-3 sm:justify-end">
          <nav
            aria-label="Hauptnavigation"
            class="flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--color-muted)] sm:gap-6 sm:text-sm"
          >
            <a class="transition-colors hover:text-[var(--color-text)]" href="#about">{{
              languageService.t('navProfile')
            }}</a>
            <a class="transition-colors hover:text-[var(--color-text)]" href="#skills">{{
              languageService.t('navSkills')
            }}</a>
            <a class="transition-colors hover:text-[var(--color-text)]" href="#projects">{{
              languageService.t('navProjects')
            }}</a>
            <a class="transition-colors hover:text-[var(--color-text)]" href="#experience">{{
              languageService.t('navExperience')
            }}</a>
            <a
              class="bg-[var(--color-primary)] px-3 py-2 text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              href="#contact"
              >{{ languageService.t('navContact') }}</a
            >
          </nav>
          <div class="flex items-center gap-2 text-xs text-[var(--color-muted)]">
            <label class="sr-only" for="language-select">{{
              languageService.t('languageLabel')
            }}</label>
            <select
              id="language-select"
              data-testid="language-select"
              class="appearance-none border-0 bg-transparent px-1 py-1 font-semibold text-[var(--color-text)] outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              [value]="languageService.language()"
              [attr.aria-label]="languageService.t('languageLabel')"
              (change)="setLanguage($event)"
            >
              <option value="de">DE</option>
              <option value="en">EN</option>
            </select>
            <span aria-hidden="true" class="text-[var(--color-border)]">/</span>
            <label class="sr-only" for="theme-select">Theme</label>
            <select
              id="theme-select"
              data-testid="theme-select"
              class="appearance-none border-0 bg-transparent px-1 py-1 font-semibold text-[var(--color-text)] outline-none transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              [value]="themeService.theme()"
              aria-label="Farbschema"
              (change)="setTheme($event)"
            >
              <option value="dark">Dunkel</option>
              <option value="light">Hell</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class SiteHeader {
  protected readonly languageService = inject(LanguageService);
  protected readonly themeService = inject(ThemeService);

  protected setLanguage(event: Event): void {
    const language = (event.target as HTMLSelectElement).value as Language;
    this.languageService.setLanguage(language);
  }

  protected setTheme(event: Event): void {
    const theme = (event.target as HTMLSelectElement).value as Theme;
    this.themeService.setTheme(theme);
  }
}
