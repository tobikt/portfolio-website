import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `
    <footer
      class="border-t border-[var(--color-border-subtle)] px-5 py-8 text-center text-sm text-[var(--color-subtle)]"
    >
      <p>Entwickelt mit Angular und Tailwind CSS.</p>
    </footer>
  `,
})
export class SiteFooter {}
