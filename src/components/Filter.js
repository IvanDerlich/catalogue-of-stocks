  
const Filter = ({list, name, changeFilter}) =>{  

  const handleChange = (event) => {
    const newValue = event.target.value    
    changeFilter(name, newValue)
  }

  return (
    <div>
      <div>{name.replace(/^\w/, (c) => c.toUpperCase())}</div>
      <select 
        onChange={handleChange}
        name={name}
      >
        <option value='ANY'>--- Select Value ---</option>
        <option value='ANY'>ANY</option>
        {list.map((item, index) => 
          <option 
            key={index}
            value={item}
          >{item}
          </option>)}
      </select>
    </div>
  )
}

export default Filter
