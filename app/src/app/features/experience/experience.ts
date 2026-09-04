import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { ExperienceService } from '../../core/services/experience.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="px-4 py-16 sm:px-5 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          {{ languageService.t('experienceKicker') }}
        </p>
        <h2
          class="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl"
        >
          {{ languageService.t('experienceTitle') }}
        </h2>
        <div class="mt-10 space-y-8 border-l border-[var(--color-border)] pl-5 sm:pl-7">
          @for (entry of experience$ | async; track entry.company + entry.role) {
            <article class="reveal relative py-2">
              <span
                class="absolute -left-[27px] top-3 h-3 w-3 border border-[var(--color-accent)] bg-[var(--color-bg)] sm:-left-[33px]"
              ></span>
              <p
                class="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-subtle)]"
              >
                {{ entry.startDate }}
                @if (entry.endDate) {
                  · {{ entry.endDate }}
                } @else {
                  · {{ languageService.t('experienceCurrent') }}
                }
              </p>
              <h3 class="mt-2 text-lg font-semibold text-[var(--color-text)]">{{ entry.role }}</h3>
              <p class="mt-1 text-sm text-[var(--color-body)]">{{ entry.company }}</p>
              <p class="mt-3 text-[var(--color-muted)]">{{ entry.description }}</p>
              <ul class="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                @for (achievement of entry.achievements; track achievement) {
                  <li>• {{ achievement }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ExperienceSection {
  protected readonly languageService = inject(LanguageService);
  private readonly experienceService = inject(ExperienceService);
  protected readonly experience$ = this.experienceService.getExperience();
}
