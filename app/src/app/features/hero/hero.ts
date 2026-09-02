import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="relative flex min-h-[78vh] items-center overflow-hidden px-5 py-24">
      <div class="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl bg-[#5e6ad2]/15 blur-[120px]"></div>
      <div class="mx-auto w-full max-w-6xl">
        <p class="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-[#828fff]">Softwareentwicklung · Web · Architektur</p>
        <h1 class="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.05em] text-[#f7f8f8] sm:text-7xl">
          Digitale Produkte, präzise entwickelt.
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-[#8a8f98]">
          Ich entwickle moderne, wartbare Webanwendungen mit einem klaren Fokus auf Nutzererlebnis und technische Qualität.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <a class="rounded-md bg-[#5e6ad2] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#828fff]" href="#projects">Projekte ansehen</a>
          <a class="rounded-md border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-medium text-[#d0d6e0] transition-colors hover:bg-white/[0.05]" href="#contact">Kontakt aufnehmen</a>
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
