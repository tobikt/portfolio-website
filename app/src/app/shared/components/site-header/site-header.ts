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
      <div class="mx-auto flex min-h-16 max-w-6xl items-center gap-5 px-4 py-3 sm:px-5">
        <div class="flex shrink-0 items-center gap-3">
          <a
            class="text-base font-semibold tracking-tight text-[var(--color-text)]"
            href="#hero"
            aria-label="Zur Startsektion"
          >
            Tobias Kükelheim<span class="text-[var(--color-accent)]">.</span>
          </a>
          <button
            type="button"
            data-testid="language-toggle"
            class="border-b border-transparent px-1 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-text)] focus-visible:border-[var(--color-accent)] focus-visible:text-[var(--color-text)] focus-visible:outline-none"
            [attr.aria-label]="languageService.t('languageSwitchLabel')"
            (click)="languageService.toggleLanguage()"
          >
            {{ languageService.language() === 'de' ? 'EN' : 'DE' }}
          </button>
        </div>

        <nav
          aria-label="Hauptnavigation"
          class="ml-auto flex min-w-0 flex-nowrap items-center justify-end gap-4 overflow-x-auto whitespace-nowrap text-xs font-semibold text-[var(--color-muted)] sm:gap-6 sm:text-sm"
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
        </nav>

        <div class="flex shrink-0 items-center gap-3">
          <button
            type="button"
            data-testid="theme-toggle"
            class="grid h-9 w-9 place-items-center border border-[var(--color-border)] bg-[var(--color-surface)] text-base text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            [attr.aria-label]="
              themeService.theme() === 'dark'
                ? 'Zum hellen Modus wechseln'
                : 'Zum dunklen Modus wechseln'
            "
            (click)="themeService.toggleTheme()"
          >
            <span aria-hidden="true">{{ themeService.theme() === 'dark' ? '☀' : '☾' }}</span>
          </button>
          <a
            class="bg-[var(--color-primary)] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] sm:text-sm"
            href="#contact"
            >{{ languageService.t('navContact') }}</a
          >
        </div>
      </div>
    </header>
  `,
})
export class SiteHeader {
  protected readonly languageService = inject(LanguageService);
  protected readonly themeService = inject(ThemeService);
}
