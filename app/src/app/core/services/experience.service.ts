import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';
import { Experience } from '../../models/experience.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);
  private readonly dataPath$ = this.languageService.dataPath$;

  getExperience(): Observable<Experience[]> {
    return this.dataPath$.pipe(
      switchMap((dataPath) => this.http.get<Experience[]>(`${dataPath}/experience.json`)),
    );
  }
}
