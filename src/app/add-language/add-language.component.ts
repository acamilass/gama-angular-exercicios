import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/typings/Languages';
import { LanguagesService } from '../services/languages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  language: Languages = {
    id: null,
    name: '',
    creator: '',
    year: ''
  }

  constructor(private languagesService: LanguagesService, private router: Router) { }

  ngOnInit() {
  }

  addLanguage() {
    this.languagesService.addLanguage(this.language).subscribe(() => {
      alert('Linguagem adicionada');
      this.router.navigateByUrl('languages');
    })
  }
}
