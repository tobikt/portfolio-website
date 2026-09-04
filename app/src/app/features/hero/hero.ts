import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="relative flex min-h-[72vh] items-center px-4 py-20 sm:px-5 sm:py-24">
      <div class="mx-auto w-full max-w-6xl">
        <p
          class="reveal mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]"
        >
          Tobias Kükelheim · Senior Software Engineer / Cloud Architect · Raum Stuttgart
        </p>
        <h1
          class="reveal reveal-delay-1 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-7xl"
        >
          Software, die man später noch anfassen will.
        </h1>
        <p
          class="reveal reveal-delay-2 mt-7 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8"
        >
          Ich plane und entwickle AWS-nahe Anwendungen, Plattformbausteine und Tools für Cloud-,
          Engineering- und Automotive-Kontexte — pragmatisch, wartbar und betrieblich denkbar.
        </p>
        <div class="reveal reveal-delay-2 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            class="rounded-md bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
            href="#projects"
            >Arbeiten ansehen</a
          >
          <a
            class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-body)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)]"
            href="#about"
            >Profil lesen</a
          >
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
