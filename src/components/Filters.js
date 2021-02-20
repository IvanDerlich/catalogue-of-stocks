import {
  changeFilter
} from '../actions/index'


const handleChange = (store,name) => {  
  //console.log(event, 'Event')
  console.log(name, 'Name')
  console.log(store)
  // const {value} = event.target
  // console.log(event.target.value, '-> Value')
  //changeFilter(store, filter, value)
}


const Filter = ({store,name}) =>{
  const list = store.getState()[name + 'List']
  return (
    <div>
      <div>{name.replace(/^\w/, (c) => c.toUpperCase())}</div>
      <select 
        onChange={()=>handleChange(store,name)}
        name={name}>
        <option>--- Select Value ---</option>
        {list.map((item, index) => <option key={index} value={item}>{item}</option>)}
      </select>
    </div>
  )
}

function Filters({store}) {
  return(
    <div>
      <Filter store={store} name={'industry'}/>
      <Filter store={store} name={'sector'}/>
      <Filter store={store} name={'country'}/>
    </div>
  )
}

export default Filters