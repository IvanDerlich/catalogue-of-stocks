import PropTypes from 'prop-types';
import Filters from '../containers/Filters';
import StockList from '../containers/StockList';

function DisplayStocks({ store }) {
  return (
    <div>
      <Filters store={store} />
      <StockList store={store} />
    </div>
  );
}

DisplayStocks.propTypes = {
  store: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
};

export default DisplayStocks;
