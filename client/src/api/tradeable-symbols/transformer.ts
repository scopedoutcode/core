import { ITradeableSymbol } from '../../models'

export const transformTradeableSymbols = (arrayFromAPI: any): Array<ITradeableSymbol> => {
  return arrayFromAPI
    .filter((el:any) => {
      return el.symbol && el.name
    })
    .map((el:any) => {
      return {
        ticker: el.symbol,
        name: el.name
      }
    })
}