import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../models/experience.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private readonly http = inject(HttpClient);

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>('/data/experience.json');
  }
}
