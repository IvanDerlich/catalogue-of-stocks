const industryFilter = (
  state = '',
  action,
) => {
  switch (action.type) {    
    case 'CHANGE_INDUSTRY_FILTER':
      return action.industryFilter    
    default:
      return state;
  }
};

export default industryFilter;