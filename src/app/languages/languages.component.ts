import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/typings/Languages';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Languages[] = [];

  constructor(private languagesService: LanguagesService) { }

  ngOnInit() {
    this.getLanguages();
  }

  getLanguages() {
    this.languagesService.getLanguages().subscribe(
      res => {
        this.languages = res;
        console.log(res);
      },
      erro => {
        console.log(erro);
      }
    )
  }

}
