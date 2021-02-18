const getUniqueValuesFromList = (list, propertyName) => {    
  let array = [];
  let value = ""
  list.forEach(item => {
    value = item[propertyName]         
    if(!array.includes(value)){
      array.push(value)
    }          
  })
  const msgForSorting = '     '
  const msg = 'NOT SPECIFIED'
  let msgForSortingIndex = array.indexOf(msg)
  array[msgForSortingIndex] = msgForSorting 
  array = array.sort();
  msgForSortingIndex = array.indexOf(msgForSorting)
  array[msgForSortingIndex] = msg  
  return array;
}

export default getUniqueValuesFromList