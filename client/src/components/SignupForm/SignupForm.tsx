import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { ISignupFormProps } from './types'

function SignupForm(props: ISignupFormProps) {
    const I18n = useTranslation()
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .required(I18n.t('signup.enterValidName')),
        password: Yup.string()
            .required(I18n.t('signup.enterValidPassword')),
        email: Yup.string()
            .email(I18n.t('signup.enterValidEmail'))
            .required(I18n.t('signup.enterValidEmail'))
    })
    return (
        <div className="center tc mt4">
            <div className="f5 gray mt3">{ I18n.t('signup.createAccount') }</div>
            <h1 className="f2 black-80 mt3">{  I18n.t('signup.freeMembership') }</h1>
            <div className="center f5 mw6 w-70 black-50 mt3">{ I18n.t('signup.membershipMessage') }</div>
            <hr className="mw5 bb bw1 mt4 b--black-10"/>
            <div className="pa3 black-80 tl">
                <Formik
                    initialValues={{
                        firstName: '',
                        password: '',
                        email: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={props.handleSubmit}
                >
                    {() => (
                        <Form className="measure center" data-testid="SignupForm">
                            <div className="ba b--transparent ph0 mh0">
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="firstName">{ I18n.t('signup.firstName') }</label>
                                    <Field 
                                        name="firstName" placeholder={ I18n.t('signup.firstNamePlaceholder') } type="text"
                                        data-testid="signup-first-name"
                                        className="w-100 ba b--black-20 br1 pa3 bg-easy-grey mb2"
                                    />
                                    <ErrorMessage component="span" className="b cardinal-red" name="firstName" />
                                </div>

                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email">{ I18n.t('signup.email') }</label>
                                    <Field 
                                        name="email" placeholder={ I18n.t('signup.emailPlaceholder') } type="email"
                                        data-testid="signup-email"
                                        className="w-100 ba b--black-20 br1 pa3 bg-easy-grey mb2"
                                    />
                                    <ErrorMessage component="span" className="b cardinal-red" name="email" />
                                </div>

                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">{ I18n.t('signup.password')}</label>
                                    <Field 
                                        name="password" type="password" data-testid="signup-password"
                                        className="w-100 ba b--black-20 br1 pa3 bg-easy-grey mb2"
                                    />
                                    <ErrorMessage component="span" className="b cardinal-red" name="password" />
                                </div>
                            </div>
                            <button 
                                className="pa3 b br2 white bg-blue-grey pointer f4 dib w-100" 
                                data-testid='signup-button'
                                type="submit">{ I18n.t('signup.join') }
                            </button>
                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export { SignupForm }