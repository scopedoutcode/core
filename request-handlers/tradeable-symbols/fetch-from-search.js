const api = require('../../api')

module.exports = async (req,res) => {
    try {
        const params = {
            apikey: process.env.FMP_API_KEY,
            limit: 10,
            query: req.query.query
        }
        const tradeableSymbols = await api.actions.fetchTradeableSymbolsFromSearch(params)
        res.status(200).send(tradeableSymbols.data)
    }catch(e) {
        res.status(500).send()
    }
}