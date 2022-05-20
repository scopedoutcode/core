import { FormEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as API from '../../api';
import { ITradeableSymbol } from '../../models';
import './AutoComplete.css'

function AutoComplete() {
  const formRef = useRef<HTMLFormElement>(null)
  const I18n = useTranslation();
  const [tradeableSymbols, setTradeableSymbols] = useState<ITradeableSymbol[]>([])
  const [selectedSymbol, setSelectedSymbol] = useState('')
  
  async function handleSearchTextChange(e: React.ChangeEvent){
    const newSearchText = (e?.target as HTMLInputElement)?.value
    if (!newSearchText) {
      return setTradeableSymbols([])
    }
    try {
      const symbols: ITradeableSymbol[] = await API.searchTradeableSymbols(newSearchText)
      setTradeableSymbols(symbols)
    }catch(e) {
      setTradeableSymbols([])
    }
  }

  function handleSymbolSelect(e: React.MouseEvent) {
    const symbol = (e?.target as HTMLElement)?.id
    setSelectedSymbol(symbol)
    setTradeableSymbols([])
    formRef?.current?.reset()
  }

  return (
    <div className='tc'>
      { selectedSymbol.length > 0 && <div className='mt4 f3'>
          <span className='black-40'>{I18n.t('autocomplete.selectedSymbol')}</span>: ${selectedSymbol}
        </div>
      }
      <form className='mt4' onSubmit={(e: FormEvent) => {e.preventDefault()}} ref={formRef}>
        <input
          className='w-33 input-reset ba b--black-20 br2 pa3 mt2'
          type='text'
          placeholder={I18n.t('autocomplete.placeholder')}
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
                onClick={(e: React.MouseEvent) => {handleSymbolSelect(e)}}>
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