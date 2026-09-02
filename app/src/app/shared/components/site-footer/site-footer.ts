import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `
    <footer class="border-t border-white/5 px-5 py-8 text-center text-sm text-[#62666d]">
      <p>Entwickelt mit Angular und Tailwind CSS.</p>
    </footer>
  `,
})
export class SiteFooter {}
