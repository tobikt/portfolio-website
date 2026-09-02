import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="px-5 py-24">
      <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-[#7170ff]">01 · Über mich</p>
          <h2 class="mt-4 text-3xl font-medium tracking-[-0.03em] text-[#f7f8f8]">Technik mit Blick fürs Ganze.</h2>
        </div>
        <div class="space-y-5 text-base leading-8 text-[#8a8f98]">
          <p>Ich verbinde saubere Softwarearchitektur mit verständlichen Oberflächen. Dabei entstehen Lösungen, die nicht nur funktionieren, sondern langfristig erweiterbar bleiben.</p>
          <p>Mein Anspruch: Komplexität reduzieren, Entscheidungen nachvollziehbar machen und Produkte Schritt für Schritt verbessern.</p>
        </div>
      </div>
    </section>
  `,
})
export class About {}
