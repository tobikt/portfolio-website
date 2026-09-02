import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SkillService } from '../../core/services/skill.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="px-4 py-16 sm:px-5 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">02 · Skills</p>
        <h2 class="mt-4 text-2xl font-medium tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl">Werkzeuge für robuste Produkte.</h2>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (skill of skills$ | async; track skill.name) {
            <article class="reveal rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:-translate-y-1 hover:bg-[var(--color-surface-hover)] sm:p-6">
              <p class="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-subtle)]">{{ skill.category }}</p>
              <h3 class="mt-3 text-lg font-medium text-[var(--color-text)]">{{ skill.name }}</h3>
              @if (skill.level) {
                <p class="mt-3 leading-7 text-[var(--color-muted)]">{{ skill.level }}</p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  private readonly skillService = inject(SkillService);
  protected readonly skills$ = this.skillService.getSkills();
}
