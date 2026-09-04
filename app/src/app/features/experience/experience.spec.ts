import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ExperienceService } from '../../core/services/experience.service';
import { Experience } from '../../models/experience.model';
import { ExperienceSection } from './experience';

describe('ExperienceSection', () => {
  const entries: Experience[] = [
    {
      company: 'Example Company',
      role: 'Cloud Software Architect',
      startDate: '2024-01',
      endDate: '2025-06',
      description: 'Built cloud platform components.',
      achievements: ['Improved deployment reliability'],
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
    expect(element.textContent).toContain('Cloud Software Architect');
    expect(element.textContent).toContain('Improved deployment reliability');
  });
});
