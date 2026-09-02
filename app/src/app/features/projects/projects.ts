import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="px-5 py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">03 · Projekte</p>
        <div class="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 class="text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8]">Ausgewählte Arbeiten.</h2>
          <span class="text-sm text-[#62666d]">Daten aus lokalem JSON-Content.</span>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2">
          @for (project of projects$ | async; track project.id) {
            <article class="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:bg-white/[0.04]">
              <span class="font-mono text-xs uppercase text-[#62666d]">{{ project.category }}</span>
              <h3 class="mt-10 text-xl font-medium text-[#f7f8f8]">{{ project.title }}</h3>
              <p class="mt-3 leading-7 text-[#8a8f98]">{{ project.description }}</p>
              <div class="mt-5 flex flex-wrap gap-2">
                @for (technology of project.technologies; track technology) {
                  <span class="rounded-full border border-white/10 px-3 py-1 text-xs text-[#d0d6e0]">{{ technology }}</span>
                }
              </div>
              <div class="mt-6 flex gap-3">
                @for (link of project.links; track link.url) {
                  <a class="text-sm font-medium text-[#828fff] hover:text-[#f7f8f8]" [href]="link.url" target="_blank" rel="noreferrer">{{ link.label }}</a>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Projects {
  private readonly projectService = inject(ProjectService);
  protected readonly projects$ = this.projectService.getProjects();
}
