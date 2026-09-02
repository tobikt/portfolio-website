import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SkillService } from '../../core/services/skill.service';
import { Skill } from '../../models/skill.model';
import { Skills } from './skills';

describe('Skills', () => {
  const skills: Skill[] = [
    { name: 'RxJS', category: 'Frontend', level: 'Advanced' },
    { name: 'GitHub Actions', category: 'Engineering', level: 'Intermediate' },
    { name: 'Documentation', category: 'Arbeitsweise', level: 'Advanced' },
  ];

  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
      providers: [
        {
          provide: SkillService,
          useValue: { getSkills: () => of(skills) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    fixture.detectChanges();
  });

  it('renders skills loaded from the skill service', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('RxJS');
    expect(element.textContent).toContain('GitHub Actions');
    expect(element.textContent).toContain('Documentation');
  });
});
