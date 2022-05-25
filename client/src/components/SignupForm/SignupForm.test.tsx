import { act, render } from '@testing-library/react'
import { SignupForm } from './SignupForm'
import userEvent from '@testing-library/user-event'
import { ISignupFormProps } from './types'

jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: (key: any) => key})
}))

describe('<SignupForm>', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders', () => {
        const props: ISignupFormProps = {
            handleSubmit: jest.fn()
        }

        render(<SignupForm {...props} />)
    })

    it('should show error messages when user enters invalid', async () => {
        const props: ISignupFormProps = {
            handleSubmit: jest.fn()
        }
        const component = render(<SignupForm {...props} />)

        await act(async () => {
            userEvent.click(component.getByTestId('signup-button'))
        })
        expect(component.queryByText('signup.enterValidName')).toBeInTheDocument()
        expect(component.queryByText('signup.enterValidPassword')).toBeInTheDocument()
        expect(component.queryByText('signup.enterValidEmail')).toBeInTheDocument()
    })

    it('should not submit form when user enters invalid', async () => {
        const spy = jest.fn()
        const props: ISignupFormProps = {
            handleSubmit: spy
        }
        const component = render(<SignupForm {...props} />)

        await act(async () => {
            userEvent.click(component.getByTestId('signup-button'))
        })
        expect(spy).not.toBeCalled()
    })

    it('should submit form with no errors', async () => {
        const spy = jest.fn()
        const props: ISignupFormProps = {
            handleSubmit: spy
        }
        const component = render(<SignupForm {...props} />)
        await act(async () => {
            userEvent.type(component.getByTestId('signup-first-name'), 'Bob')
            userEvent.type(component.getByTestId('signup-email'), 'bob@bob.com')
            userEvent.type(component.getByTestId('signup-password'), 'abc123')
            userEvent.click(component.getByTestId('signup-button'))
        })

        expect(component.queryByText('signup.enterValidName')).not.toBeInTheDocument()
        expect(component.queryByText('signup.enterValidPassword')).not.toBeInTheDocument()
        expect(component.queryByText('signup.enterValidEmail')).not.toBeInTheDocument()
        expect(spy).toBeCalled()
    })
})