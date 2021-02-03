import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './contador.actions';

export const initialState = 10;
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
// export function counterReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//     case decrement.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }
