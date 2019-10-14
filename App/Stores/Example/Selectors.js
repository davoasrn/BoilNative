/**
 * Selectors let us factorize logic that queries the state.
 *
 * Selectors can be used in sagas or components to avoid duplicating that logic.
 *
 * Writing selectors is optional as it is not always necessary, we provide a simple example below.
 */
import { createSelector } from 'reselect';

const example = state => state.example;

export const user = createSelector(
    example,
    example => example.user,
);

export const userIsLoading = createSelector(
    example,
    example => example.userIsLoading,
);

export const userErrorMessage = createSelector(
    example,
    example => example.userErrorMessage,
);

const liveInEuropeFunc = (example) => {
  if (!example.user || Object.entries(example.user).length <= 0) return null

  // For this example, we imagine this cities are european cities
  let europeanCities = ['Gwenborough', 'Wisokyburgh', 'McKenziehaven', 'South Elvis', 'Roscoeview']

  return europeanCities.includes(example.user.address.city)
}

export const liveInEurope = createSelector(
  liveInEuropeFunc(example),
);