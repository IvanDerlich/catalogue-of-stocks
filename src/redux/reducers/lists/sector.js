import types from '../actionTypes';

const sectorList = (
  state = [],
  action,
) => {
  switch (action.type) {
    case types.LOAD_SECTOR_LIST:
      return action.sectorList;
    default:
      return state;
  }
};

export default sectorList;
