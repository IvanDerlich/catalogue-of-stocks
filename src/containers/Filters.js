import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import './Filters.scss';

import {
  changeFilter,
} from '../actions/index';

function Filters({ store }) {
  const handleChangeFilter = (name, value) => {
    changeFilter(store, name, value);
  };
  const names = [
    'industry',
    'sector',
    'country',
  ];
  return (
    <div>
      {names.map(name => (
        <Filter
          key={name}
          store={store}
          name={name}
          handleFilterChange={handleChangeFilter}
        />
      ))}
    </div>
  );
}

Filters.propTypes = {
  store: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
};

export default Filters;
