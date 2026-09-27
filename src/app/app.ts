import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {

  message = signal('Loading...');

  constructor(private http: HttpClient) {

    this.http.get<any>('http://127.0.0.1:8000/api/hello')
      .subscribe({
        next: (response) => {
          console.log('Laravel response:', response);
          this.message.set(response.message);
        },

        error: (error) => {
          console.error('Laravel connection error:', error);
          this.message.set('Error connecting to Laravel');
        }
      });

  }
}