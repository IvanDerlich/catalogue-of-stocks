import PropTypes from 'prop-types';
import Filter from '../components/Filter';

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
          list={store.getState()[`${name}List`]}
          name={name}
          changeFilter={handleChangeFilter}
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
