import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ExperienceService } from '../../core/services/experience.service';
import { Experience } from '../../models/experience.model';
import { ExperienceSection } from './experience';

describe('ExperienceSection', () => {
  const entries: Experience[] = [
    {
      company: 'Example Company',
      role: 'Frontend Developer',
      startDate: '2024-01',
      endDate: '2025-06',
      description: 'Built accessible Angular interfaces.',
      achievements: ['Improved UX quality'],
    },
  ];

  let fixture: ComponentFixture<ExperienceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSection],
      providers: [
        {
          provide: ExperienceService,
          useValue: { getExperience: () => of(entries) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSection);
    fixture.detectChanges();
  });

  it('renders experience entries loaded from the experience service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('Example Company');
    expect(element.textContent).toContain('Frontend Developer');
    expect(element.textContent).toContain('Improved UX quality');
  });
});
