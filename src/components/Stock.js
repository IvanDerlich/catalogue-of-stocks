import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Stock({ stock, number }) {
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
      <hr />
      <div>
        Number:
        {number}
      </div>
      <div>
        Id:
        {id}
      </div>
      <div>
        Symbol:
        <Link to={`stocks/${symbol}`}>{symbol}</Link>
      </div>
      <div>
        Name:
        {companyName}
      </div>
      <div>
        Sector:
        {sector}
      </div>
      <div>
        Industry:
        {industry}
      </div>
      <div>
        Exchange:
        {exchange}
      </div>
      <div>
        Contry:
        {country}
      </div>
      <div>
        Price:
        {price}
      </div>
    </div>
  );
}

Stock.propTypes = {
  number: PropTypes.number.isRequired,
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

export default Stock;
