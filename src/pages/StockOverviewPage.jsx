import {StockList} from '../components/StockList'
import { AutoComplete } from '../components/Autocomplete'
import trading from "../images/trading.jpg"


export const StockOverviewPage = () => {
    return <div>
        <div className="text-center">
            <img src={trading} />
        </div>
        <AutoComplete />
        <StockList />

    </div>
    
}