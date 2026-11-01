import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly language = inject(LanguageService);
  protected readonly t = this.language.t;
  protected readonly year = new Date().getFullYear();
}
