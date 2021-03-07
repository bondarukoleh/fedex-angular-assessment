import {Injectable} from '@angular/core';
import {Request} from '../helpers/request';
import {environment} from '../../environments/environment';

type CreateUserData = { firstName: string, lastName: string, email: string };

@Injectable({providedIn: 'root'})
export class UserApi {
  constructor(private request: Request) {
    this.request.url = environment.apiUrl;
  }

  async createUser(userData: CreateUserData): Promise<unknown> {
    return this.request.post('/users', userData);
  }
}
