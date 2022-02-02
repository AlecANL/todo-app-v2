import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public currentTheme: string = 'dark-theme';

  public set setCurrentTheme(mode: string) {
    localStorage.setItem('theme', mode);
    this.currentTheme = mode;
  }

  private changeTheme(isDarkMode: boolean) {
    const theme = isDarkMode ? 'light-theme' : 'dark-theme';
    this.setCurrentTheme = theme;
  }

  private handleMediaChange(mq: MediaQueryListEvent) {
    this.changeTheme(mq.matches);
  }

  constructor() {
    if (localStorage.getItem('theme')) {
      this.currentTheme = localStorage.getItem('theme') as string;
      return;
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', this.handleMediaChange);
    this.changeTheme(mq.matches);
  }
}
