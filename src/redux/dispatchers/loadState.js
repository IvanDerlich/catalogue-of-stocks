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

const dispatcher = (dispatch, stocksList) => {
  const data = createInitialState(stocksList);
  dispatch(loadStockList(data.stockList));
  dispatch(loadSectorList(data.sectorList));
  dispatch(loadIndustryList(data.industryList));
  dispatch(loadCountryList(data.countryList));
  dispatch(show());
};

const loadState = async (dispatch, getState) => {
  const mode = getState().fetchingMode;
  if (mode === 'offline') {
    dispatcher(dispatch, offlineStockList);
  } if (mode === 'API') {
    dispatcher(dispatch, await getStockList());
  }
  return new Error('Please specify initializing mode: API or offline');
};

export default loadState;
