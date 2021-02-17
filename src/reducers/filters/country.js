const countryFilter = (
  state = '',
  action,
) => {
  switch (action.type) {    
    case 'CHANGE_COUNTRY_FILTER':
      return action.countryFilter    
    default:
      return state;
  }
};

export default countryFilter;