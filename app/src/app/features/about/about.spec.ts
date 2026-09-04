import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProfileService } from '../../core/services/profile.service';
import { About } from './about';

describe('About', () => {
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [
        {
          provide: ProfileService,
          useValue: {
            getProfile: () =>
              of({
                headline: 'Änderbare Profilbeschreibung',
                paragraphs: ['Profiltext aus Markdown.'],
                bullets: ['Cloud', 'Automotive'],
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    fixture.detectChanges();
  });

  it('renders profile content loaded from markdown data', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('Änderbare Profilbeschreibung');
    expect(element.textContent).toContain('Profiltext aus Markdown.');
    expect(element.textContent).toContain('Cloud');
    expect(element.textContent).toContain('Automotive');
  });
});
