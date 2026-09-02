import { Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  template: `
    <header class="sticky top-0 z-50 border-b border-white/5 bg-[#08090a]/90 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a class="font-semibold tracking-tight text-[#f7f8f8]" href="#hero" aria-label="Zur Startsektion">
          Portfolio<span class="text-[#7170ff]">.</span>
        </a>
        <nav aria-label="Hauptnavigation" class="flex items-center gap-3 text-xs font-medium text-[#8a8f98] sm:gap-6 sm:text-sm">
          <a class="transition-colors hover:text-[#f7f8f8]" href="#about">Über mich</a>
          <a class="transition-colors hover:text-[#f7f8f8]" href="#skills">Skills</a>
          <a class="transition-colors hover:text-[#f7f8f8]" href="#projects">Projekte</a>
          <a class="hidden transition-colors hover:text-[#f7f8f8] sm:block" href="#experience">Erfahrung</a>
          <a class="rounded-md bg-[#5e6ad2] px-3 py-2 text-white transition-colors hover:bg-[#828fff]" href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  `,
})
export class SiteHeader {}
