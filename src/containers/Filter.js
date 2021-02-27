import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// eslint-disable-next-line import/named
import changeFilter from '../redux/dispatchers/changeFilter';

const Filter = ({
  name,
  filterValue,
  filterList,
  changeFilter,
}) => {
  const handleChange = event => {
    const { value } = event.target;
    changeFilter(name, value);
  };

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
  name: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  filterList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { name }) => ({
  filterValue: state[`${name}Filter`],
  filterList: state[`${name}List`],
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (name, value) => changeFilter(dispatch, name, value),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
