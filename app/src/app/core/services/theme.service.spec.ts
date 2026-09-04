import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('uses dark theme by default and persists it on the document', () => {
    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });

  it('sets a specific theme and stores the preference', () => {
    const service = TestBed.inject(ThemeService);

    service.setTheme('light');

    expect(service.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });

  it('toggles between dark and light theme and stores the preference', () => {
    const service = TestBed.inject(ThemeService);

    service.toggleTheme();

    expect(service.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');

    service.toggleTheme();

    expect(service.theme()).toBe('dark');
    expect(document.documentElement.dataset['theme']).toBe('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('restores a stored light preference', () => {
    localStorage.setItem('portfolio-theme', 'light');

    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('light');
    expect(document.documentElement.dataset['theme']).toBe('light');
  });
});
