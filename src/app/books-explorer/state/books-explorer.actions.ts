import {createAction} from '@ngrx/store';

export enum action {
  ToggleOn= '[Book List] toggle on',
  ToggleOff =  '[Book List] toggle off',
}

export const toggleOn = createAction(action.ToggleOn);
export const toggleOff = createAction(action.ToggleOff);


