import produce from 'immer';

import { DECREMENT, INCREMENT } from '../../actions/count';


const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
    case DECREMENT:
      draft.count--;
      break;

    case INCREMENT:
      draft.count++;
      break;
    default:
      return state;
    }

    return draft;
  });

export default countReducer;
