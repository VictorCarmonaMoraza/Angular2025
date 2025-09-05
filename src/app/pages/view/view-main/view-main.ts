import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-view-main',
  imports: [],
  templateUrl: './view-main.html',
  styleUrl: './view-main.css'
})
export class ViewMain {

  counter = signal(20);

  //Increment counter
  increment(value: number) {
    this.counter.update(c => c + value)
  }

  //Decrement counter
  decrement(value: number) {
    this.counter.update(c=>c-value);
  }

  //Reset counter at initial value
  reset() {
    this.counter.set(20)
  }

}


