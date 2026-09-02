import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="px-5 py-24">
      <div class="mx-auto max-w-6xl rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-16 text-center sm:px-12">
        <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">05 · Kontakt</p>
        <h2 class="mx-auto mt-5 max-w-2xl text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8] sm:text-4xl">Lass uns über das nächste Projekt sprechen.</h2>
        <p class="mx-auto mt-5 max-w-xl leading-7 text-[#8a8f98]">Kontaktmöglichkeiten und Profile werden hier zentral zusammengeführt.</p>
        <a class="mt-8 inline-flex rounded-md bg-[#5e6ad2] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#828fff]" href="mailto:hello@example.com">E-Mail schreiben</a>
      </div>
    </section>
  `,
})
export class Contact {}
