import produce from 'immer';

import * as isLoggedTypes from '../../actions/isLogged/isLoggedTypes';

const initialState = {
  isLogged: false
};

const loggingReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
    case isLoggedTypes.ISLOGGED:
      draft.isLogged = action.payload;
      break;
    default:
      return state;
    }
    
    return draft;
  });

export default loggingReducer;
