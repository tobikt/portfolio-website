import { Component } from '@angular/core';
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
  imports: [
    SiteHeader,
    Hero,
    About,
    Skills,
    Projects,
    ExperienceSection,
    Contact,
    SiteFooter,
  ],
  template: `
    <div class="min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-body)] transition-colors duration-200">
      <app-site-header />
      <main>
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
export class PortfolioPage {}
