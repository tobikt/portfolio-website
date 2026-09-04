import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Skill } from '../../models/skill.model';
import { SkillService } from './skill.service';

describe('SkillService', () => {
  let service: SkillService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(SkillService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('loads skills from the public JSON endpoint', () => {
    const skills: Skill[] = [
      {
        name: 'Angular',
        category: 'Anwendungsentwicklung',
        level: 'Projektpraxis',
        icon: 'angular',
      },
    ];

    service.getSkills().subscribe((result) => {
      expect(result).toEqual(skills);
    });

    const request = http.expectOne('data/de/skills.json');
    expect(request.request.method).toBe('GET');
    request.flush(skills);
  });
});
