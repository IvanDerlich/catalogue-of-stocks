import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Stock.scss';

function Stock({ stock }) {
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
      <td className="stock-data"><Link to={`stocks/${symbol}`}>{symbol}</Link></td>
      <td className="stock-data"><Link to={`stocks/${symbol}`}>{companyName}</Link></td>
      <td>{sector}</td>
      <td>{industry}</td>
      <td>{exchange}</td>
      <td>{country}</td>
      <td>{price}</td>
      <td>{id}</td>
    </tr>
  );
}

Stock.propTypes = {
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
