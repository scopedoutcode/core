import { SignupForm } from './components'
import { ISignupForm } from './components/SignupForm/types'
import { FormikHelpers } from 'formik'
import './i18n'

function App() {

  const handleSignupSubmit = (
    values: ISignupForm,
    { setSubmitting }: FormikHelpers<ISignupForm>
) => {
    console.log(values)
    setSubmitting(false)
}

  return (
    <div className='roboto pt4'>
      <SignupForm handleSubmit={handleSignupSubmit} />
    </div>
  );
}

export default App;