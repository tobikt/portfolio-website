import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../models/project.model';
import { Projects } from './projects';

describe('Projects', () => {
  const projects: Project[] = [
    {
      id: 'portfolio-engineering-setup',
      title: 'Portfolio Engineering Setup',
      description: 'A portfolio backed by structured content files.',
      technologies: ['Angular', 'TypeScript'],
      category: 'Engineering Setup',
      links: [{ label: 'Demo', url: 'https://example.com' }],
    },
  ];

  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [
        {
          provide: ProjectService,
          useValue: { getProjects: () => of(projects) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();
  });

  it('renders projects loaded from the project service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('Portfolio Engineering Setup');
    expect(element.textContent).toContain('A portfolio backed by structured content files.');
    expect(element.textContent).toContain('Angular');
    expect(element.querySelector('a')?.getAttribute('href')).toBe('https://example.com');
  });
});
