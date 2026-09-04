import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  let service: ProfileService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(ProfileService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('loads and parses the editable markdown profile', () => {
    service.getProfile().subscribe((profile) => {
      expect(profile.headline).toBe('Eigener Profiltext');
      expect(profile.paragraphs).toEqual(['Absatz eins.', 'Absatz zwei.']);
      expect(profile.bullets).toEqual(['Cloud', 'Automotive']);
    });

    const request = http.expectOne('data/de/profile.md');
    expect(request.request.method).toBe('GET');
    request.flush('# Eigener Profiltext\n\nAbsatz eins.\n\nAbsatz zwei.\n\n- Cloud\n- Automotive');
  });
});
