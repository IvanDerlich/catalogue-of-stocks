import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';

const Filter = ({
  store, name, handleFilterChange,
}) => {
  const handleChange = event => {
    const { value } = event.target;
    handleFilterChange(name, value);
  };

  const reduxState = store.getState();
  const filterValue = reduxState[`${name}Filter`];
  const filterList = reduxState[`${name}List`];
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => store.subscribe(() => { forceUpdate(); }), []);

  return (
    <div>
      <div>{name.replace(/^\w/, c => c.toUpperCase())}</div>
      <select
        className="select-css"
        onChange={handleChange}
        name={name}
        value={filterValue}
      >
        <option value="ANY">ANY</option>
        {filterList.map(item => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  store: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
  name: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
