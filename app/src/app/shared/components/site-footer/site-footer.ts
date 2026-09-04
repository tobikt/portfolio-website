import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FooterService } from '../../../core/services/footer.service';
import { SocialLink, SocialProvider } from '../../../models/footer.model';

const PROVIDER_ICONS: Record<SocialProvider, string> = {
  github: 'GH',
  linkedin: 'in',
  profile: '◎',
  email: '@',
  website: '↗',
};

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (footer$ | async; as footer) {
      <footer class="border-t border-[var(--color-border-subtle)] px-4 py-10 sm:px-5">
        <div
          class="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[var(--color-subtle)] sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="font-semibold text-[var(--color-text)]">{{ footer.madeBy }}</p>
            <p class="mt-1 text-xs uppercase tracking-[0.18em]">
              {{ footer.version }} · {{ footer.sourceLabel }} JSON
            </p>
          </div>

          <nav
            aria-label="Social profiles"
            class="flex flex-wrap items-center gap-2 sm:justify-end"
          >
            @for (link of footer.socialLinks; track link.provider + link.url) {
              <a
                class="inline-flex h-9 min-w-9 items-center justify-center border border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-xs font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                [href]="link.url"
                [attr.aria-label]="link.label"
                [attr.target]="isExternal(link.url) ? '_blank' : null"
                [attr.rel]="isExternal(link.url) ? 'noreferrer' : null"
              >
                <span aria-hidden="true">{{ iconFor(link) }}</span>
                <span class="sr-only">{{ link.label }}</span>
              </a>
            }
          </nav>
        </div>
      </footer>
    }
  `,
})
export class SiteFooter {
  private readonly footerService = inject(FooterService);
  protected readonly footer$ = this.footerService.getFooter();

  protected iconFor(link: SocialLink): string {
    return PROVIDER_ICONS[link.provider];
  }

  protected isExternal(url: string): boolean {
    return /^https?:\/\//.test(url);
  }
}
