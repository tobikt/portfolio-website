import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="px-5 py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">02 · Skills</p>
        <h2 class="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8]">Werkzeuge für robuste Produkte.</h2>
        <div class="mt-10 grid gap-4 md:grid-cols-3">
          @for (group of skillGroups; track group.title) {
            <article class="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 class="text-lg font-medium text-[#f7f8f8]">{{ group.title }}</h3>
              <p class="mt-3 leading-7 text-[#8a8f98]">{{ group.items }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly skillGroups = [
    { title: 'Frontend', items: 'Angular, TypeScript, HTML, CSS, Tailwind CSS' },
    { title: 'Engineering', items: 'Architektur, Testing, Git, CI/CD, APIs' },
    { title: 'Arbeitsweise', items: 'Clean Code, TDD, Dokumentation, iterative Entwicklung' },
  ];
}
