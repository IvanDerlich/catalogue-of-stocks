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
      <td>
        <Link to={`stocks/${symbol}`}>{symbol}</Link>
      </td>
      <td>{companyName}</td>
      <td>{sector}</td>
      <td>{industry}</td>
      <td>{exchange}</td>
      <td>{country}</td>
      <td>{price}</td>
      <td>{id}</td>
      <td>{number}</td>
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
