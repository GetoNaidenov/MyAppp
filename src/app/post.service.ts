import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './interfaces'
import { from, Observable } from 'rxjs';
  import { environment } from '../environments/environment';

  const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(public http: HttpClient) { }

  loadPost(): Observable<IPost[]>{
   return this.http.get<IPost[]>(`${apiUrl}/post`)
  }

}
