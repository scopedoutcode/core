import { 
    SEARCH_TRADEABLE_SYMBOLS_ENDPOINT
} from './endpoints';
import { get } from '../actions';
import { transformTradeableSymbols } from './transformer';

export const searchTradeableSymbols = async (query: string) => {
    try {
        const responseArray = await get(SEARCH_TRADEABLE_SYMBOLS_ENDPOINT, {
            query
        })
        const tradeableSymbols = transformTradeableSymbols(responseArray.data)
        return tradeableSymbols
    } catch (e) {
        throw e
    }
}