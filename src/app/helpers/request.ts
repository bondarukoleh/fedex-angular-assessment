import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class Request {
  private mainUrl = '';

  constructor(private http: HttpClient) {
  }

  set url(url: string) {
    this.mainUrl = url;
  }

  post(path: string, body: any, config?: any): Promise<unknown> {
    return this.http.post(`${this.mainUrl}${path}`, body, config)
      .toPromise()
      .then((result) => result)
      .catch(error => this.handleError('Post request', error));
  }

  private handleError(operation = 'operation', error): { error: boolean, errorMessage?: string } {
    console.error(`${operation} failed: ${error.message}`);
    return {error: true, errorMessage: error.message};
  }
}
