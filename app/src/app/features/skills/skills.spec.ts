import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SkillService } from '../../core/services/skill.service';
import { Skill } from '../../models/skill.model';
import { Skills } from './skills';

describe('Skills', () => {
  const skills: Skill[] = [
    { name: 'AWS', category: 'Cloud & Infrastruktur', level: 'Berufspraxis' },
    { name: 'Docker', category: 'Cloud & Infrastruktur', level: 'Projektpraxis' },
    { name: 'IaC', category: 'Cloud & Infrastruktur', level: 'Praxis' },
    { name: 'Lambda', category: 'Cloud & Infrastruktur', level: 'Praxis' },
    { name: 'CloudWatch', category: 'Cloud & Infrastruktur', level: 'Praxis' },
    { name: 'VPC', category: 'Cloud & Infrastruktur', level: 'Praxis' },
    { name: 'S3', category: 'Cloud & Infrastruktur', level: 'Praxis' },
    { name: 'CANoe', category: 'Automotive & Embedded', level: 'Toolpraxis' },
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

    expect(element.textContent).toContain('AWS');
    expect(element.textContent).toContain('Docker');
    expect(element.textContent).toContain('CANoe');
  });

  it('groups skills thematically by category', () => {
    const element = fixture.nativeElement as HTMLElement;
    const categoryHeadings = Array.from(element.querySelectorAll('section h3')).map((heading) =>
      heading.textContent?.trim(),
    );

    expect(categoryHeadings).toEqual(['Cloud & Infrastruktur', 'Automotive & Embedded']);
  });

  it('collapses longer skill groups and expands them on demand', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('VPC');
    expect(element.textContent).not.toContain('S3');

    const toggle = element.querySelector('button') as HTMLButtonElement;
    expect(toggle.textContent).toContain('Alle 7 anzeigen');

    toggle.click();
    fixture.detectChanges();

    expect(element.textContent).toContain('S3');
    expect(toggle.textContent).toContain('Weniger anzeigen');
  });

  it('does not render the old generic LinkedIn level label', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).not.toContain('LinkedIn Kenntnis');
  });
});
