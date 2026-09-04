import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { FooterService } from './footer.service';
import { FooterContent } from '../../models/footer.model';

describe('FooterService', () => {
  let service: FooterService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(FooterService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('loads footer content and social links from the public JSON endpoint', () => {
    const footer: FooterContent = {
      madeBy: 'Made by Tobias Kükelheim',
      version: 'v0.1.0',
      sourceLabel: 'Source',
      socialLinks: [
        { provider: 'github', label: 'GitHub', url: 'https://github.com/tobikt' },
        { provider: 'profile', label: 'Profile', url: 'https://me.xn--kkelheim-65a.de/' },
      ],
    };

    service.getFooter().subscribe((result) => {
      expect(result).toEqual(footer);
    });

    const request = http.expectOne('data/de/footer.json');
    expect(request.request.method).toBe('GET');
    request.flush(footer);
  });
});
