import offlineStockList from '../services/offlineStockList';
import getStockList from '../services/getStockList';
import createInitialState from './loadState/createInitialState';
import {
  loadStockList,
  loadCountryList,
  loadSectorList,
  loadIndustryList,
  show,
} from './actionCreators';

const dispatcher = (dispatch, state) => {
  dispatch(loadStockList(state.stockList));
  dispatch(loadSectorList(state.sectorList));
  dispatch(loadIndustryList(state.industryList));
  dispatch(loadCountryList(state.countryList));
  dispatch(show());
};

const loadState = async (dispatch, getState) => {
  const mode = getState().fetchingMode;
  if (mode === 'offline') {
    const stocksList = offlineStockList;
    const newState = createInitialState(stocksList);
    dispatcher(dispatch, newState);
  } if (mode === 'API') {
    const stocksList = await getStockList();
    const newState = createInitialState(stocksList);
    dispatcher(dispatch, newState);
  }
  return new Error('Please specify initializing mode: API or offline');
};

export default loadState;
