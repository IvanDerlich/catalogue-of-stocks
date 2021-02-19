import {
  changeFilter
} from '../actions/index'


const handleChange = (event) => {  
  console.log(event, 'Event')
  const {value} = event.target
  console.log(event.target.value, '-> Value')
  //changeFilter(store, filter, value)
}


const displaySelect = (list, propertyName) =>{
  return (
    <div>
      <div>{propertyName.replace(/^\w/, (c) => c.toUpperCase())}</div>
      <select 
        onChange={handleChange()}
        name={propertyName}>
        <option>--- Select Value ---</option>
        {list.map((item, index) => <option key={index} value={item}>{item}</option>)}
      </select>
    </div>
  )
}

function Filters({store}) {
  const {
    industryList,
    sectorList,
    countryList
  } = store.getState()
  return(
    <div>
      {displaySelect(industryList,'industries')}
      {displaySelect(sectorList,'sectors')}
      {displaySelect(countryList,'countries')} 
    </div>
  )
}

export default Filters