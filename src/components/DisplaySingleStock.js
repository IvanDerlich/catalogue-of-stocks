import { retrieveSingleStock } from "../actions/index"

function DisplaySingleStock(props){  
  const {store} = props
  const {symbol} = props.match.params 
  const stock = retrieveSingleStock(store,symbol)
  const {
    companyName,
    sector,
    industry,
    exchange,
    country,
    price,
    id,
  } = stock
  return(
    <div>
      <div>Id: {id}</div>
      <div>Symbol: {symbol} </div>      
      <div>Name: {companyName}</div>
      <div>Sector: {sector}</div>
      <div>Industry: {industry}</div>
      <div>Exchange: {exchange}</div>
      <div>Contry: {country}</div>
      <div>Price: {price}</div>
    </div>
  )
}
export default DisplaySingleStock