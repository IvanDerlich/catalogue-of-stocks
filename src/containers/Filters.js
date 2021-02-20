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
      {names.map((name, index) => (
        <Filter
          key={index}
          list={store.getState()[`${name}List`]}
          name={name}
          changeFilter={handleChangeFilter}
        />
      ))}
    </div>
  );
}

export default Filters;
