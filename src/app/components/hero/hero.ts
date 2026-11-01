import { Component, OnInit, inject, signal } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

interface BootLine {
  prompt: boolean;
  text: string;
  status?: 'ok';
}

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero implements OnInit {
  private readonly language = inject(LanguageService);
  protected readonly t = this.language.t;

  protected readonly bootLines: BootLine[] = [
    { prompt: true, text: 'whoami' },
    { prompt: false, text: 'pablo_nunez', status: 'ok' },
    { prompt: true, text: 'cat ~/.config/role' },
  ];

  protected readonly visibleBootLines = signal(0);
  protected readonly bootDone = signal(false);

  ngOnInit(): void {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      this.visibleBootLines.set(this.bootLines.length);
      this.bootDone.set(true);
      return;
    }

    let step = 0;
    const revealNextLine = () => {
      step++;
      this.visibleBootLines.set(step);
      if (step < this.bootLines.length) {
        setTimeout(revealNextLine, 420);
      } else {
        setTimeout(() => this.bootDone.set(true), 350);
      }
    };
    setTimeout(revealNextLine, 300);
  }
}
