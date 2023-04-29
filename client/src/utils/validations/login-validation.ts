import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('This field is required!'),
  password: Yup.string().required('This field is required!'),
});
