import {Injectable} from '@angular/core';
import {Request} from '../helpers/request';

type CreateUserData = { firstName: string, lastName: string, email: string };

@Injectable({providedIn: 'root'})
export class UserApi {
  constructor(private request: Request) {
    this.request.url = 'https://demo-api.now.sh';
  }

  async createUser(userData: CreateUserData): Promise<{}> {
    return this.request.post('/users', userData);
  }
}
