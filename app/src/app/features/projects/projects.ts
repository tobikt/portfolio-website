import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="px-4 py-16 sm:px-5 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          03 · Projekte
        </p>
        <div
          class="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between"
        >
          <h2
            class="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl"
          >
            Was gerade entsteht.
          </h2>
        </div>
        <div class="mt-10 grid gap-4 lg:grid-cols-2">
          @for (project of projects$ | async; track project.id) {
            <article
              class="reveal group border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-panel)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)] sm:p-7"
            >
              <span
                class="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-subtle)]"
                >{{ project.category }}</span
              >
              <h3 class="mt-8 text-xl font-semibold text-[var(--color-text)] sm:mt-10">
                {{ project.title }}
              </h3>
              <p class="mt-3 leading-7 text-[var(--color-muted)]">{{ project.description }}</p>
              <div class="mt-5 flex flex-wrap gap-2">
                @for (technology of project.technologies; track technology) {
                  <span
                    class="border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-body)]"
                    >{{ technology }}</span
                  >
                }
              </div>
              <div class="mt-6 flex flex-wrap gap-3">
                @for (link of project.links; track link.url) {
                  <a
                    class="text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-text)]"
                    [href]="link.url"
                    target="_blank"
                    rel="noreferrer"
                    >{{ link.label }}</a
                  >
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
