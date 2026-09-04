import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  imports: [AsyncPipe],
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="px-4 py-16 sm:px-5 sm:py-24">
      <div
        class="reveal mx-auto grid max-w-6xl gap-8 border-y border-[var(--color-border-subtle)] py-12 md:grid-cols-[0.75fr_1.25fr] md:gap-12"
      >
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            01 · Profil
          </p>
          @if (profile$ | async; as profile) {
            <h2
              class="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl"
            >
              {{ profile.headline }}
            </h2>
          }
        </div>
        @if (profile$ | async; as profile) {
          <div class="space-y-5 text-base leading-8 text-[var(--color-muted)]">
            @for (paragraph of profile.paragraphs; track paragraph) {
              <p>{{ paragraph }}</p>
            }
            @if (profile.bullets.length) {
              <ul class="grid gap-2 pt-2 text-sm text-[var(--color-body)] sm:grid-cols-2">
                @for (bullet of profile.bullets; track bullet) {
                  <li class="border-l-2 border-[var(--color-accent)] pl-3">{{ bullet }}</li>
                }
              </ul>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class About {
  private readonly profileService = inject(ProfileService);
  protected readonly profile$ = this.profileService.getProfile();
}
