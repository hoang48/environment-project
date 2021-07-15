import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../../redux/actions/count';

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>Total: {count}</h1>
    </>
  );
};

export default Count;
