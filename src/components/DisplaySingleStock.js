/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { retrieveSingleStock } from '../actions/index';

function DisplaySingleStock(props) {
  const { store, symbol } = props;
  const stock = retrieveSingleStock(store.getState(), symbol);
  const {
    companyName,
    sector,
    industry,
    exchange,
    country,
    price,
    id,
  } = stock;
  return (
    <div>
      <div>Id:{id}</div>
      <div>Symbol:{symbol}</div>
      <div>Name:{companyName}</div>
      <div>Sector:{sector}</div>
      <div>Industry:{industry}</div>
      <div>Exchange:{exchange}</div>
      <div>Contry:{country}</div>
      <div>Price:{price}</div>
    </div>
  );
}

DisplaySingleStock.propTypes = {
  store: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
  symbol: PropTypes.string.isRequired,
};

export default DisplaySingleStock;
