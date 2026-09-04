import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { ExperienceSection } from '../experience/experience';
import { Hero } from '../hero/hero';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { SiteFooter } from '../../shared/components/site-footer/site-footer';
import { SiteHeader } from '../../shared/components/site-header/site-header';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [SiteHeader, Hero, About, Skills, Projects, ExperienceSection, Contact, SiteFooter],
  template: `
    <div
      class="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-body)] transition-colors duration-200"
    >
      <a
        data-testid="skip-link"
        class="fixed left-4 top-4 z-[60] -translate-y-20 rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition focus:translate-y-0"
        href="#content"
      >
        {{ languageService.t('skipLink') }}
      </a>
      <app-site-header />
      <main id="content">
        <app-hero />
        <app-about />
        <app-skills />
        <app-projects />
        <app-experience />
        <app-contact />
      </main>
      <app-site-footer />
    </div>
  `,
})
export class PortfolioPage {
  protected readonly languageService = inject(LanguageService);
}
