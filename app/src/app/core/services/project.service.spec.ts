import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ProjectService } from './project.service';
import { Project } from '../../models/project.model';

describe('ProjectService', () => {
  let service: ProjectService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(ProjectService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('loads projects from the public JSON endpoint', () => {
    const projects: Project[] = [
      {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        description: 'Personal portfolio built with Angular.',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
        category: 'Web Application',
        links: [{ label: 'GitHub', url: 'https://github.com/tobikt/portfolio-website' }],
        featured: true,
      },
    ];

    service.getProjects().subscribe((result) => {
      expect(result).toEqual(projects);
    });

    const request = http.expectOne('/data/projects.json');
    expect(request.request.method).toBe('GET');
    request.flush(projects);
  });
});
