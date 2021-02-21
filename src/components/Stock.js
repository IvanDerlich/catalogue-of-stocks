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
    <tr>
      <td><Link to={`stocks/${symbol}`}>{symbol}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{companyName}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{sector}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{industry}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{exchange}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{country}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{price}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{id}</Link></td>
      <td><Link to={`stocks/${symbol}`}>{number}</Link></td>
    </tr>
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
