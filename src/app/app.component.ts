import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './common/AppState';
import * as actions from './contador/contador.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  counter: number = 0;
  /**
   *
   */
  constructor(private store: Store<AppState>) {
    this.counter = 10;
  }

  public ngOnInit() {
    this.store.select('count').subscribe((counter) => (this.counter = counter));
    // this.store.subscribe((state) => {
    //   console.log(state);
    //   // this.counter = state.count;
    // });
  }
  decrementar() {
    // if (this.contador >= 1) this.contador += -1;
    this.store.dispatch(actions.decrement());
  }

  incrementar() {
    // this.contador += 1;
    this.store.dispatch(actions.increment());
  }
}
