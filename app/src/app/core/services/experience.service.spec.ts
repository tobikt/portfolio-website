import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExperienceService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(ExperienceService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('loads experience entries from the public JSON endpoint', () => {
    const experience: Experience[] = [
      {
        company: 'Example Company',
        role: 'Software Developer',
        startDate: '2024-01',
        description: 'Built web applications.',
        achievements: ['Delivered production features'],
      },
    ];

    service.getExperience().subscribe((result) => {
      expect(result).toEqual(experience);
    });

    const request = http.expectOne('/data/experience.json');
    expect(request.request.method).toBe('GET');
    request.flush(experience);
  });
});
