import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';
import { Project } from '../../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);
  private readonly dataPath$ = this.languageService.dataPath$;

  getProjects(): Observable<Project[]> {
    return this.dataPath$.pipe(
      switchMap((dataPath) => this.http.get<Project[]>(`${dataPath}/projects.json`)),
    );
  }
}
