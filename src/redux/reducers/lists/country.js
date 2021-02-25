import types from '../actionTypes';

const countryList = (
  state = [],
  action,
) => {
  switch (action.type) {
    case types.LOAD_COUNTRY_LIST:
      return action.countryList;
    default:
      return state;
  }
};

export default countryList;
