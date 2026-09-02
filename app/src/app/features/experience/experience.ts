import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="px-5 py-24">
      <div class="mx-auto max-w-6xl">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">04 · Erfahrung</p>
        <h2 class="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8]">Erfahrung, chronologisch.</h2>
        <div class="mt-10 border-l border-white/10 pl-7">
          <article class="relative py-2">
            <span class="absolute -left-[33px] top-3 h-3 w-3 rounded-full border border-[#7170ff] bg-[#08090a]"></span>
            <p class="font-mono text-xs text-[#62666d]">AKTUELL</p>
            <h3 class="mt-2 text-lg font-medium text-[#f7f8f8]">Berufliche Stationen</h3>
            <p class="mt-2 text-[#8a8f98]">Die Inhalte werden über strukturierte Erfahrungsdaten ergänzt.</p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceSection {}
