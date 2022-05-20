import axios from 'axios';
import { useRef, useState } from 'react';
import './AutoComplete.css'

/*
Global todos:
- Specify types
- Use translation/language bundles
*/

function AutoComplete() {
  const formRef = useRef<any>(null)

  const [tradeableSymbols, setTradeableSymbols] = useState<any[]>([])
  const [selectedSymbol, setSelectedSymbol] = useState('')
  
  async function handleSearchTextChange(e: any){
    const newSearchText = e.target.value
    if (!newSearchText) {
      return setTradeableSymbols([])
    }

    /*
      Abstract away axios
      Remove hard-coded strings
      Create a testable module -- to search tradeable symbols
      Stop repeating logic -- abstract the transformation
      Handle errors -- wrap abstracted version of this in try/catch
    */
    const symbols = await axios.get('/search-tradeable-symbols', {
        params: {
            query: newSearchText
        }
    })
    setTradeableSymbols(
      symbols.data
        .filter((el:any) => {
          return el.symbol && el.name
        })
        .map((el:any) => {
          return {
            ticker: el.symbol,
            name: el.name
          }
        })
    )
  }

  // optional chaining to avoid runtime errors
  function handleSymbolSelect(e: any) {
    const symbol = e.target.id
    setSelectedSymbol(symbol)
    setTradeableSymbols([])
    formRef.current.reset()
  }

  return (
    <div className='tc'>
      { selectedSymbol.length > 0 && <div className='mt4 f3'>
          <span className='black-40'>Selected</span>: ${selectedSymbol}
        </div>
      }
      <form className='mt4' onSubmit={(e: any) => {e.preventDefault()}} ref={formRef}>
        <input
          className='w-33 input-reset ba b--black-20 br2 pa3 mt2'
          type='text'
          placeholder='AAPL'
          onChange={handleSearchTextChange}
        />
      </form>
      { tradeableSymbols.length > 0 && (
        <div className='w-33 center' data-testid='tradeable-symbol-suggestions'>
          <div className='tradeable-symbols ba mt0 pl0 tl'>
          { tradeableSymbols.map((suggestion) => {
            return (
              <div
                key={suggestion.ticker}
                id={suggestion.ticker}
                onClick={(e: any) => {handleSymbolSelect(e)}}>
                {`${suggestion.name} (${suggestion.ticker})`}
              </div>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}

export { AutoComplete }