import * as countTypes from './countTypes';

export const decrement = () => ({
  type: countTypes.DECREMENT
});

export const increment = () => ({
  type: countTypes.INCREMENT
});
