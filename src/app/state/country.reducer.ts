import { createReducer, on, Action } from '@ngrx/store';

import { retrievedCountry,Country } from './country.actions';

export const initialState: ReadonlyArray<Country> = [];

export const countryReducer = createReducer(
  initialState,
  on(retrievedCountry, (state, { Country }) => [...Country])
);