import Stock from '../components/Stock'


export default function StockList({stockList}) {
  return (
    <div>
      StockList:
      {stockList.map(stock => {
        return (<Stock stock={stock}/>)
      })}      
    </div>  
  )
}