import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillService {
  private readonly http = inject(HttpClient);

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('/data/skills.json');
  }
}
