import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ExperienceService } from '../../core/services/experience.service';
import { FooterService } from '../../core/services/footer.service';
import { ProfileService } from '../../core/services/profile.service';
import { ProjectService } from '../../core/services/project.service';
import { SkillService } from '../../core/services/skill.service';
import { PortfolioPage } from './portfolio-page';

describe('PortfolioPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPage],
      providers: [
        { provide: ProjectService, useValue: { getProjects: () => of([]) } },
        { provide: SkillService, useValue: { getSkills: () => of([]) } },
        {
          provide: ProfileService,
          useValue: {
            getProfile: () => of({ headline: 'Profil', paragraphs: [], bullets: [] }),
          },
        },
        { provide: ExperienceService, useValue: { getExperience: () => of([]) } },
        {
          provide: FooterService,
          useValue: {
            getFooter: () =>
              of({
                madeBy: 'Made by Tobias Kükelheim',
                version: 'v0.1.0',
                sourceLabel: 'Source',
                socialLinks: [],
              }),
          },
        },
      ],
    }).compileComponents();
  });

  it('renders the portfolio shell and all content sections in order', () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const sectionIds = Array.from(element.querySelectorAll('main section')).map(
      (section) => section.id,
    );

    expect(element.querySelector('header')).toBeTruthy();
    expect(sectionIds).toEqual(['hero', 'about', 'skills', 'projects', 'experience', 'contact']);
    expect(element.querySelector('main#content')).toBeTruthy();
    expect(element.querySelector('footer')).toBeTruthy();
  });

  it('offers a skip link for keyboard users', () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const skipLink = element.querySelector('[data-testid="skip-link"]') as HTMLAnchorElement;

    expect(skipLink).toBeTruthy();
    expect(skipLink.getAttribute('href')).toBe('#content');
  });

  it('offers navigation links for every section', () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const targets = Array.from(element.querySelectorAll('header a')).map((link) =>
      link.getAttribute('href'),
    );

    expect(targets).toEqual(['#hero', '#about', '#skills', '#projects', '#experience', '#contact']);
  });

  it('uses responsive containers and reveal animations for polished sections', () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.overflow-x-hidden')).toBeTruthy();
    expect(element.querySelector('.sm\\:flex-row')).toBeTruthy();
    expect(element.querySelector('.lg\\:grid-cols-2')).toBeTruthy();
    expect(element.querySelector('.reveal')).toBeTruthy();
  });
});
