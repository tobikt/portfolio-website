import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService } from '../../../core/services/theme.service';

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
          <button
            type="button"
            data-testid="language-toggle"
            class="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            [attr.aria-label]="languageService.t('languageSwitchLabel')"
            (click)="languageService.toggleLanguage()"
          >
            {{ languageService.language() === 'de' ? 'ENG' : 'DE' }}
          </button>
          <button
            type="button"
            data-testid="theme-toggle"
            class="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            [attr.aria-label]="
              themeService.theme() === 'dark'
                ? 'Zum hellen Modus wechseln'
                : 'Zum dunklen Modus wechseln'
            "
            (click)="themeService.toggleTheme()"
          >
            {{
              themeService.theme() === 'dark'
                ? languageService.t('themeLight')
                : languageService.t('themeDark')
            }}
          </button>
        </div>
      </div>
    </header>
  `,
})
export class SiteHeader {
  protected readonly languageService = inject(LanguageService);
  protected readonly themeService = inject(ThemeService);
}
