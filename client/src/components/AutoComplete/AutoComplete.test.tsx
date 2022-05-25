import { AutoComplete } from '.'
import sinon from 'sinon'
import * as API from '../../api/tradeable-symbols/requests'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: (key: any) => key})
}))

describe('<AutoComplete>', () => {

  afterEach(() => {
    sinon.restore()
  })

  it('renders', () => {
    render(<AutoComplete />)
  })
  
  it('should render items on type', async() => {
    sinon.stub(API, 'searchTradeableSymbols').callsFake(() => {
      return Promise.resolve([{ name: 'A', ticker: 'A' }])
    })
    const component = render(<AutoComplete />)
    await act(async () => {
      userEvent.type(component.getByPlaceholderText('autocomplete.placeholder'), 'A')
    })
    const suggestions = await component.queryByTestId('tradeable-symbol-suggestions')
    expect(suggestions).toBeInTheDocument()
  })

  it('should render no items on failure', async() => {
    sinon.stub(API, 'searchTradeableSymbols').callsFake(() => {
      return Promise.reject()
    })
    const component = render(<AutoComplete />)
    await act(async () => {
      userEvent.type(component.getByPlaceholderText('autocomplete.placeholder'), 'A')
    })
    const suggestions = await component.queryByTestId('tradeable-symbol-suggestions')
    expect(suggestions).not.toBeInTheDocument()
  })

  it('should render no items on success', async() => {
    sinon.stub(API, 'searchTradeableSymbols').callsFake(() => {
      return Promise.resolve([])
    })
    const component = render(<AutoComplete />)
    await act(async () => {
      userEvent.type(component.getByPlaceholderText('autocomplete.placeholder'), 'A')
    })
    const suggestions = await component.queryByTestId('tradeable-symbol-suggestions')
    expect(suggestions).not.toBeInTheDocument()
  })
})