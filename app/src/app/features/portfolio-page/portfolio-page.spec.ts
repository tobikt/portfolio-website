import { TestBed } from '@angular/core/testing';
import { PortfolioPage } from './portfolio-page';

describe('PortfolioPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPage],
    }).compileComponents();
  });

  it('renders the portfolio shell and all content sections in order', () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const sectionIds = Array.from(element.querySelectorAll('main section')).map(
      (section) => section.id,
    );

    expect(element.querySelector('header')).toBeTruthy();
    expect(sectionIds).toEqual([
      'hero',
      'about',
      'skills',
      'projects',
      'experience',
      'contact',
    ]);
    expect(element.querySelector('footer')).toBeTruthy();
  });

  it('offers navigation links for every section', () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const targets = Array.from(element.querySelectorAll('header nav a')).map(
      (link) => link.getAttribute('href'),
    );

    expect(targets).toEqual([
      '#about',
      '#skills',
      '#projects',
      '#experience',
      '#contact',
    ]);
  });
});
