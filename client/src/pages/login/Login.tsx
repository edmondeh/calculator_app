import React, { useEffect } from 'react';
import { AuthLayout } from '../../layouts';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { loginValidationSchema } from '../../utils/validations/login-validation';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from './actions';
import { LoginType } from './login.type';
import './login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const initialValues: LoginType = {
    email: '',
    password: '',
  };

  const loginState: any = useSelector((state: any) => state.loginReducer);

  const onSubmit = (values: LoginType, { setSubmitting }: FormikHelpers<LoginType>) => {
    dispatch(loginUserAction(values));
    setSubmitting(false);
  };

  useEffect(() => {
    console.log(loginState);
  }, [loginState]);

  return (
    <AuthLayout>
      <div className="app_auth__title">
        <h3>Login</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="app_auth__form">
            <div
              className={`app_auth__form__input ${
                errors.email && touched.email ? 'app_auth__form__input--error' : ''
              }`}
            >
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="span" />
            </div>
            <div
              className={`app_auth__form__input ${
                errors.password && touched.password ? 'app_auth__form__input--error' : ''
              }`}
            >
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="span" />
            </div>
            <div className="app_auth__form__submit">
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
