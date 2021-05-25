import { combinedReducers } from 'redux';

const reducers = (state = { count: 0 }, actions) => {
  let newState = { ...state };
  console.log({ newState });
  switch (actions.type) {
    case 'INCREMENT_COUNT': {
      newState.count = state.count + 1;
      return newState;
    }
    case 'DECREMENT_COUNT': {
      newState.count = state.count - 1;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducers;
