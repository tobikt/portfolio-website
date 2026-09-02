import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../core/services/experience.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="px-5 py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">04 · Erfahrung</p>
        <h2 class="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8]">Erfahrung, chronologisch.</h2>
        <div class="mt-10 space-y-8 border-l border-white/10 pl-7">
          @for (entry of experience$ | async; track entry.company + entry.role) {
            <article class="relative py-2">
              <span class="absolute -left-[33px] top-3 h-3 w-3 rounded-full border border-[#7170ff] bg-[#08090a]"></span>
              <p class="font-mono text-xs text-[#62666d]">{{ entry.startDate }} @if (entry.endDate) { · {{ entry.endDate }} } @else { · aktuell }</p>
              <h3 class="mt-2 text-lg font-medium text-[#f7f8f8]">{{ entry.role }}</h3>
              <p class="mt-1 text-sm text-[#d0d6e0]">{{ entry.company }}</p>
              <p class="mt-3 text-[#8a8f98]">{{ entry.description }}</p>
              <ul class="mt-4 space-y-2 text-sm text-[#8a8f98]">
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
  private readonly experienceService = inject(ExperienceService);
  protected readonly experience$ = this.experienceService.getExperience();
}
