import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="px-5 py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">03 · Projekte</p>
        <div class="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 class="text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8]">Ausgewählte Arbeiten.</h2>
          <span class="text-sm text-[#62666d]">Projektdaten folgen über den Data Service.</span>
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2">
          @for (project of placeholders; track project.title) {
            <article class="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:bg-white/[0.04]">
              <span class="font-mono text-xs text-[#62666d]">{{ project.type }}</span>
              <h3 class="mt-10 text-xl font-medium text-[#f7f8f8]">{{ project.title }}</h3>
              <p class="mt-3 leading-7 text-[#8a8f98]">{{ project.description }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Projects {
  protected readonly placeholders = [
    { type: 'WEB APPLICATION', title: 'Portfolio Website', description: 'Angular-Anwendung mit modularer Architektur und datengetriebenen Inhalten.' },
    { type: 'NEXT PROJECT', title: 'Weitere Projekte', description: 'Dieser Bereich wird im nächsten Schritt mit echten Projektdaten befüllt.' },
  ];
}
