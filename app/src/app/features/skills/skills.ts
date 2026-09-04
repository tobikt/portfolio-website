import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { LanguageService } from '../../core/services/language.service';
import { SkillService } from '../../core/services/skill.service';
import { Skill } from '../../models/skill.model';

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const COLLAPSED_SKILL_COUNT = 6;

@Component({
  imports: [AsyncPipe],
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="px-4 py-16 sm:px-5 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          {{ languageService.t('skillsKicker') }}
        </p>
        <h2
          class="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl"
        >
          {{ languageService.t('skillsTitle') }}
        </h2>
        <div class="mt-10 space-y-8">
          @for (group of skillGroups$ | async; track group.category) {
            <section class="reveal border-l border-[var(--color-border)] pl-4 sm:pl-6">
              <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3
                  class="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]"
                >
                  {{ group.category }}
                </h3>
                <p class="text-xs text-[var(--color-subtle)]">
                  {{ group.skills.length }} {{ languageService.t('skillsCount') }}
                </p>
              </div>
              <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                @for (skill of visibleSkills(group); track skill.name) {
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
              @if (group.skills.length > collapsedSkillCount) {
                <button
                  type="button"
                  class="mt-4 border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  [attr.aria-expanded]="isExpanded(group.category)"
                  (click)="toggleGroup(group.category)"
                >
                  @if (isExpanded(group.category)) {
                    {{ languageService.t('skillsShowLess') }}
                  } @else {
                    {{ languageService.t('skillsShowAll', { count: group.skills.length }) }}
                  }
                </button>
              }
            </section>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly collapsedSkillCount = COLLAPSED_SKILL_COUNT;
  protected readonly languageService = inject(LanguageService);
  private readonly skillService = inject(SkillService);
  private readonly expandedCategories = signal<ReadonlySet<string>>(new Set<string>());
  protected readonly skillGroups$ = this.skillService
    .getSkills()
    .pipe(map((skills) => this.groupByCategory(skills)));

  protected visibleSkills(group: SkillGroup): Skill[] {
    return this.isExpanded(group.category)
      ? group.skills
      : group.skills.slice(0, this.collapsedSkillCount);
  }

  protected isExpanded(category: string): boolean {
    return this.expandedCategories().has(category);
  }

  protected toggleGroup(category: string): void {
    const expandedCategories = new Set(this.expandedCategories());

    if (expandedCategories.has(category)) {
      expandedCategories.delete(category);
    } else {
      expandedCategories.add(category);
    }

    this.expandedCategories.set(expandedCategories);
  }

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
