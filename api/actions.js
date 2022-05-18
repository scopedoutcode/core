const urls = require('./urls')
const requests = require('./requests')

const fetchTradeableSymbolsFromSearch = async (params) => {
    try {
        const FULL_URL = urls.TRADEABLE_SYMBOLS_FROM_SEARCH_URL
        return await requests.get(FULL_URL, params)
    }catch(e) {
        throw new Error(e)
    }
}

module.exports = {
    fetchTradeableSymbolsFromSearch
}