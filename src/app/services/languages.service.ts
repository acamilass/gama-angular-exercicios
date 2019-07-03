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
    return this.http.get<Languages[]>('https://alefesouza.dev/gama/languages.php');
  }
}
