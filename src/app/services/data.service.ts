import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient ) { }

  public $users: Observable<Array<user>> | null = null;

  GETDATA() {
    this.$users = this.http.get<Array<user>>(environment.usersApi);
  }
}
