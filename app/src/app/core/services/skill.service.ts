import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';
import { Skill } from '../../models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);
  private readonly dataPath$ = this.languageService.dataPath$;

  getSkills(): Observable<Skill[]> {
    return this.dataPath$.pipe(
      switchMap((dataPath) => this.http.get<Skill[]>(`${dataPath}/skills.json`)),
    );
  }
}
