import produce from 'immer';

import * as countTypes from '../../actions/count/countTypes';

const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
    case countTypes.DECREMENT:
      draft.count--;
      break;

    case countTypes.INCREMENT:
      draft.count++;
      break;
    default:
      return state;
    }

    return draft;
  });

export default countReducer;
