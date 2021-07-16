import produce from 'immer';

import { ISLOGGED } from '../../actions/isLogged';

const initialState = {
  isLogged: false
};

const loggingReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
    case ISLOGGED:
      draft.isLogged = action.payload;
      break;
    default:
      return state;
    }

    return draft;
  });

export default loggingReducer;
