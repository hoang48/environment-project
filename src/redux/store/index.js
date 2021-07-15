import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { rootEpic } from '../epic';
import { rootReducer } from '../reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['countReducer']
};

const epicMiddleware = createEpicMiddleware();

export const configureStore = (editing) => {
  let reducer = null;
  if (!editing) {
    reducer = rootReducer;
  } else {
    reducer = persistReducer(persistConfig, rootReducer);
  }
  // reducer = persistReducer(persistConfig, rootReducer);

  const middlewares = [epicMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const composeEnhancers = composeWithDevTools({});

  const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

  epicMiddleware.run(rootEpic);

  return store;
};
