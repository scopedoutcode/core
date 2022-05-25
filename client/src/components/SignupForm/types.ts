import { FormikHelpers } from 'formik'

export interface ISignupForm {
    firstName: string;
    email: string;
    password: string;
}

export interface ISignupFormProps {
    handleSubmit: (
        values: ISignupForm,
        { setSubmitting }: FormikHelpers<ISignupForm>
    ) => void;
}