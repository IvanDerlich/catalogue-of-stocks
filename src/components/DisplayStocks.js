import Filters from '../containers/Filters'
import StockList from '../containers/StockList'

function DisplayStocks({store}){
  return(
    <div>
      <Filters store={store}/>
      <StockList store={store}/>
    </div>
  )
}

export default DisplayStocks