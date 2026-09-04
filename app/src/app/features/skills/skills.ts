import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { SkillService } from '../../core/services/skill.service';
import { Skill } from '../../models/skill.model';

interface SkillGroup {
  category: string;
  skills: Skill[];
}

@Component({
  imports: [AsyncPipe],
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="px-4 py-16 sm:px-5 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          02 · Kenntnisse
        </p>
        <h2
          class="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl"
        >
          Thematisch geordnet — von Cloud bis Automotive.
        </h2>
        <div class="mt-10 space-y-8">
          @for (group of skillGroups$ | async; track group.category) {
            <section class="reveal border-l border-[var(--color-border)] pl-4 sm:pl-6">
              <h3
                class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]"
              >
                {{ group.category }}
              </h3>
              <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                @for (skill of group.skills; track skill.name) {
                  <article
                    class="border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-panel)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)]"
                  >
                    <h4 class="text-base font-semibold text-[var(--color-text)]">
                      {{ skill.name }}
                    </h4>
                    @if (skill.level) {
                      <p class="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {{ skill.level }}
                      </p>
                    }
                  </article>
                }
              </div>
            </section>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  private readonly skillService = inject(SkillService);
  protected readonly skillGroups$ = this.skillService
    .getSkills()
    .pipe(map((skills) => this.groupByCategory(skills)));

  private groupByCategory(skills: Skill[]): SkillGroup[] {
    const groups = new Map<string, Skill[]>();

    for (const skill of skills) {
      groups.set(skill.category, [...(groups.get(skill.category) ?? []), skill]);
    }

    return [...groups.entries()].map(([category, groupedSkills]) => ({
      category,
      skills: groupedSkills,
    }));
  }
}
