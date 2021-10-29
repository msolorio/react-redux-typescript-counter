import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { increment, incrementByAmount } from './features/counter/counterSlice';
import { RootState } from './app/store';
import './App.css';

function App() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>

      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>
        increment
      </button>

      <button onClick={() => dispatch(incrementByAmount(10))}>
        increment by amount
      </button>
    </div>
  );
}

export default App;
