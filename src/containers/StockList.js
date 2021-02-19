import Stock from '../components/Stock'


export default function StockList({stockList}) {
  return (
    <div>
      {stockList.map((stock, index) => {
        return (<Stock key={index} stock={stock}/>)
      })}      
    </div>  
  )
}