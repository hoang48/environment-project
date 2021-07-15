import * as isLoggedTypes from './isLoggedTypes';

export const isLogged = (payload) => ({
  type: isLoggedTypes.ISLOGGED,
  payload
});
