import { Link } from 'react-router-dom'

export default function Stock({stock,number}) {
  const {
    companyName,
    sector,
    industry,
    exchange,
    country,
    price,
    symbol,
    id,
  } = stock
  return (
    <div>
      <hr/>
      <div>Number: {number}</div>
      <div>Id: {id}</div>
      <div>Symbol: {
        <Link to={'stocks/'+symbol} >{symbol}</Link>
      }</div>
      <div>Name: {companyName}</div>
      <div>Sector: {sector}</div>
      <div>Industry: {industry}</div>
      <div>Exchange: {exchange}</div>
      <div>Contry: {country}</div>
      <div>Price: {price}</div>
    </div>
  )
}
