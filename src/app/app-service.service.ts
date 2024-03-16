import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  greet(name: string): string {
    return 'Hello, ${name}!';
  }
}
