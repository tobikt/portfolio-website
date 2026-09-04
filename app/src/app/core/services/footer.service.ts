import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { FooterContent } from '../../models/footer.model';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class FooterService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);
  private readonly dataPath$ = this.languageService.dataPath$;

  getFooter(): Observable<FooterContent> {
    return this.dataPath$.pipe(
      switchMap((dataPath) => this.http.get<FooterContent>(`${dataPath}/footer.json`)),
    );
  }
}
