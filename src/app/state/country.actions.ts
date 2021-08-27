import { createAction, props } from '@ngrx/store';
export interface Country {
    name:string;
    capital:string;
    flag:string;
    timezone:string;
    language:string;
} 
export const retrievedCountry = createAction(
  '[Show Country/API] Retrieve Country Success',
  props<{ Country }>()
);