import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `
    <footer
      class="border-t border-[var(--color-border-subtle)] px-5 py-8 text-center text-sm text-[var(--color-subtle)]"
    >
      <p>{{ languageService.t('footerText') }}</p>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly languageService = inject(LanguageService);
}
