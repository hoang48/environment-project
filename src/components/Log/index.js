import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLogged } from '../../redux/actions/isLogged';

const Log = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.loggingReducer.isLogged);

  return (
    <>
      <h3>Is Log Status: {status.toString()}</h3>
      <button onClick={() => dispatch(isLogged(true))}>Log In</button>
      <button onClick={() => dispatch(isLogged(false))}>Log Out</button>
    </>
  );
};

export default Log;
