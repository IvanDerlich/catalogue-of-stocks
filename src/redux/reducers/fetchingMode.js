import types from './actionTypes';

const fetchingMode = (state = '', action) => {
  switch (action.type) {
    case types.OFFLINE:
      return 'offline';
    case types.API:
      return 'API';
    default:
      return state;
  }
};

export default fetchingMode;
