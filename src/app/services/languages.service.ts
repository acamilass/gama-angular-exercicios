import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Languages } from 'src/typings/Languages';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Languages[]> {
    return this.http.get<Languages[]>('http://localhost:3000/languages');
  }

  addLanguage(language: Languages) {
    return this.http.post('http://localhost:3000/languages', language);
  }
}
