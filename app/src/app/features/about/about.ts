import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="px-4 py-16 sm:px-5 sm:py-24">
      <div class="reveal mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            01 · Über mich
          </p>
          <h2
            class="mt-4 text-2xl font-medium tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl"
          >
            Technik mit Blick fürs Ganze.
          </h2>
        </div>
        <div class="space-y-5 text-base leading-8 text-[var(--color-muted)]">
          <p>
            Ich verbinde saubere Softwarearchitektur mit verständlichen Oberflächen. Dabei entstehen
            Lösungen, die nicht nur funktionieren, sondern langfristig erweiterbar bleiben.
          </p>
          <p>
            Mein Anspruch: Komplexität reduzieren, Entscheidungen nachvollziehbar machen und
            Produkte Schritt für Schritt verbessern.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class About {}
