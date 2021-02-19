export default function Stock({stock}) {
  const {
    companyName,
    sector,
    industry,
    exchange,
    country,
    price,
    symbol,
  } = stock
  return (
    <div>
      <hr/>
      <div>Symbol: {symbol}</div>
      <div>Name: {companyName}</div>
      <div>Sector: {sector}</div>
      <div>Industry: {industry}</div>
      <div>Exchange: {exchange}</div>
      <div>Contry: {country}</div>
      <div>Price: {price}</div>
    </div>
  )
}
