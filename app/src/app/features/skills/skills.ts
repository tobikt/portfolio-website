import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SkillService } from '../../core/services/skill.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="px-5 py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">02 · Skills</p>
        <h2 class="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8]">Werkzeuge für robuste Produkte.</h2>
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          @for (skill of skills$ | async; track skill.name) {
            <article class="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <p class="font-mono text-xs uppercase tracking-[0.16em] text-[#62666d]">{{ skill.category }}</p>
              <h3 class="mt-3 text-lg font-medium text-[#f7f8f8]">{{ skill.name }}</h3>
              @if (skill.level) {
                <p class="mt-3 leading-7 text-[#8a8f98]">{{ skill.level }}</p>
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
