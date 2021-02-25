import types from '../actionTypes';

const industryList = (
  state = [],
  action,
) => {
  switch (action.type) {
    case types.LOAD_INDUSTRY_LIST:
      return action.industryList;
    default:
      return state;
  }
};

export default industryList;
