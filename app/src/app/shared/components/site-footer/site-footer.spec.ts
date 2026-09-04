import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FooterService } from '../../../core/services/footer.service';
import { SiteFooter } from './site-footer';

describe('SiteFooter', () => {
  let fixture: ComponentFixture<SiteFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteFooter],
      providers: [
        {
          provide: FooterService,
          useValue: {
            getFooter: () =>
              of({
                madeBy: 'Made by Tobias Kükelheim',
                version: 'v0.1.0',
                sourceLabel: 'Source',
                socialLinks: [
                  { provider: 'github', label: 'GitHub', url: 'https://github.com/tobikt' },
                  {
                    provider: 'linkedin',
                    label: 'LinkedIn',
                    url: 'https://linkedin.com/in/example',
                  },
                  { provider: 'profile', label: 'Profile', url: '#hero' },
                ],
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteFooter);
    fixture.detectChanges();
  });

  it('renders made-by/version metadata and provider icons from JSON-backed footer data', () => {
    const element = fixture.nativeElement as HTMLElement;
    const links = Array.from(element.querySelectorAll('a')) as HTMLAnchorElement[];

    expect(element.textContent).toContain('Made by Tobias Kükelheim');
    expect(element.textContent).toContain('v0.1.0 · Source JSON');
    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual([
      'GitHub',
      'LinkedIn',
      'Profile',
    ]);
    expect(
      links.map((link) => link.querySelector('[aria-hidden="true"]')?.textContent?.trim()),
    ).toEqual(['GH', 'in', '◎']);
  });
});
