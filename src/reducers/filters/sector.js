const sectorFilter = (
  state = 'ANY',
  action,
) => {
  switch (action.type) {    
    case 'CHANGE_SECTOR_FILTER':
      return action.sectorFilter    
    default:
      return state;
  }
};

export default sectorFilter;