import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="px-4 py-16 sm:px-5 sm:py-24">
      <div
        class="reveal mx-auto max-w-6xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-12 text-center shadow-[var(--shadow-panel)] transition-colors sm:px-12 sm:py-16"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          05 · Kontakt
        </p>
        <h2
          class="mx-auto mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-4xl"
        >
          Wenn es konkret wird: melden.
        </h2>
        <p class="mx-auto mt-5 max-w-xl leading-7 text-[var(--color-muted)]">
          Für Projekte, Austausch oder Feedback zum Portfolio.
        </p>
        <a
          class="mt-8 inline-flex bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
          href="mailto:hello@example.com"
          >E-Mail schreiben</a
        >
      </div>
    </section>
  `,
})
export class Contact {}
