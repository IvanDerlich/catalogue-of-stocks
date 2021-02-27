const getUniqueValues = (stockList, propertyName) => {
  let array = [];
  stockList.forEach(item => {
    if (!array.includes(item[propertyName])) {
      array.push(item[propertyName]);
    }
  });
  const msgForSorting = '     ';
  const msg = 'NOT SPECIFIED';
  let msgForSortingIndex = array.indexOf(msg);
  array[msgForSortingIndex] = msgForSorting;
  array = array.sort();
  msgForSortingIndex = array.indexOf(msgForSorting);
  array[msgForSortingIndex] = msg;
  return array;
};

export default getUniqueValues;
