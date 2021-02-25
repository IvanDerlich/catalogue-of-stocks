/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSingleStock } from '../redux/getters';

function SingleStock(
  { stock },
) {
  const {
    companyName,
    sector,
    industry,
    exchange,
    country,
    price,
    symbol,
    id,
  } = stock;
  return (
    <div>
      <Link to="/">Return to Stock List</Link>
      <div>Id:{id}</div>
      <div>Symbol:{symbol}</div>
      <div>Name:{companyName}</div>
      <div>Sector:{sector}</div>
      <div>Industry:{industry}</div>
      <div>Exchange:{exchange}</div>
      <div>Country:{country}</div>
      <div>Price:{price}</div>
    </div>
  );
}

const mapStateToProps = (state, { match }) => ({
  stock: getSingleStock(state, match.params.symbol),
});

SingleStock.propTypes = {
  stock: PropTypes.shape({
    companyName: PropTypes.string,
    sector: PropTypes.string,
    industry: PropTypes.string,
    exchange: PropTypes.string,
    country: PropTypes.string,
    price: PropTypes.number,
    symbol: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default connect(
  mapStateToProps,
)(SingleStock);
