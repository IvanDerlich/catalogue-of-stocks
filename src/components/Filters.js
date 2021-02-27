import Filter from '../containers/Filter';
import './Filters.scss';

function Filters() {
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
          name={name}
        />
      ))}
    </div>
  );
}

export default Filters;
