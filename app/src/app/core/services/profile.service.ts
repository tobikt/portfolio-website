import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';
import { ProfileContent } from '../../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);
  private readonly dataPath$ = this.languageService.dataPath$;

  getProfile(): Observable<ProfileContent> {
    return this.dataPath$.pipe(
      switchMap((dataPath) => this.http.get(`${dataPath}/profile.md`, { responseType: 'text' })),
      map((markdown) => this.parseMarkdown(markdown)),
    );
  }

  private parseMarkdown(markdown: string): ProfileContent {
    const headline = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Über mich';
    const bullets = [...markdown.matchAll(/^-\s+(.+)$/gm)].map((match) => match[1].trim());
    const paragraphs = markdown
      .replace(/^#\s+.+$/gm, '')
      .replace(/^-\s+.+$/gm, '')
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
      .filter(Boolean);

    return { headline, paragraphs, bullets };
  }
}
