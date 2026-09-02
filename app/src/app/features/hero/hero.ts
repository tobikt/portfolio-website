import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section
      id="hero"
      class="relative flex min-h-[72vh] items-center overflow-hidden px-4 py-20 sm:min-h-[78vh] sm:px-5 sm:py-24"
    >
      <div
        class="absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl bg-[var(--color-primary)]/15 blur-[100px] sm:h-96 sm:blur-[120px]"
      ></div>
      <div class="mx-auto w-full max-w-6xl">
        <p
          class="reveal mb-5 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-primary-hover)]"
        >
          Tobias Kükelheim · Software-Entwickler · Stuttgart
        </p>
        <h1
          class="reveal reveal-delay-1 max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-7xl"
        >
          Digitale Produkte, präzise entwickelt.
        </h1>
        <p
          class="reveal reveal-delay-2 mt-7 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8"
        >
          Ich entwickle moderne, wartbare Webanwendungen mit einem klaren Fokus auf Nutzererlebnis
          und technische Qualität.
        </p>
        <div class="reveal reveal-delay-2 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            class="rounded-md bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
            href="#projects"
            >Projekte ansehen</a
          >
          <a
            class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-center text-sm font-medium text-[var(--color-body)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-hover)]"
            href="#contact"
            >Kontakt aufnehmen</a
          >
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
