import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private message = new BehaviorSubject('First Message');
  sharedMessage = this.message.asObservable();


  constructor() { }

  nextMessage(message: string) {
    this.message.next(message)
  }
}
