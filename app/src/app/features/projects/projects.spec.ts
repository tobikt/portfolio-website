import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../models/project.model';
import { Projects } from './projects';

describe('Projects', () => {
  const projects: Project[] = [
    {
      id: 'data-driven-site',
      title: 'Data Driven Site',
      description: 'A portfolio backed by JSON content.',
      technologies: ['Angular', 'RxJS'],
      category: 'Web Application',
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

    expect(element.textContent).toContain('Data Driven Site');
    expect(element.textContent).toContain('A portfolio backed by JSON content.');
    expect(element.textContent).toContain('Angular');
    expect(element.querySelector('a')?.getAttribute('href')).toBe('https://example.com');
  });
});
