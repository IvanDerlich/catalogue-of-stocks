import Filter from '../components/Filter'
import {
  changeFilter
} from '../actions/index'

function Filters({store}) {
  
  const handleChangeFilter = (name,value) => {  
    //console.log(event, 'Event')
    // console.log(name, 'Name')
    // console.log(store)
    // const {value} = event.target
    // console.log(event. target.value, '-> Value')
    changeFilter(store, name, value)
  }
  const names = [
    'industry',
    'sector',
    'country'
  ]
  return(
    <div>
      {names.map( (name, index) => 
        <Filter
          key={index}
          list={store.getState()[name + 'List']}
          name={name}
          changeFilter={handleChangeFilter}
        />
      )}     
    </div>
  )
}

export default Filters