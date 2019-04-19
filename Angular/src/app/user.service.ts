import { Injectable } from '@angular/core';
import { User} from './user';
import {USERS} from './mock-users';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})


export class UserService {
  private usersUrl = 'api/users';

  // URL to web api
  getUser(id: number): Observable<User> {
    this.messageService.add('UserService: fetched users');
    return of(USERS.find(user => user.id === id));
  }

  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return this.http.get<User[]>(this.usersUrl);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
