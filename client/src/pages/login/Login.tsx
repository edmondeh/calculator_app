import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../layouts';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { loginValidationSchema } from '../../utils/validations/login-validation';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/auth/actions';
import { LoginType } from './login.type';
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues: LoginType = {
    email: '',
    password: '',
  };

  const auth: any = useSelector((state: any) => state.auth);

  const onSubmit = useCallback(
    (values: LoginType, { setSubmitting }: FormikHelpers<LoginType>) => {
      dispatch(loginAction(values));
      setSubmitting(false);
    },
    []
  );

  useEffect(() => {
    if (auth?.isLoggedIn) {
      navigate('/');
    }
  }, [auth]);

  return (
    <AuthLayout>
      <div className="app_auth__title">
        <h3>Login</h3>
        <p>{auth?.error?.message}</p>
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
              <Field name="email" type="email" placeholder="Email" autoFocus />
              <ErrorMessage name="email" component="span" />
            </div>
            <div
              className={`app_auth__form__input ${
                errors.password && touched.password ? 'app_auth__form__input--error' : ''
              }`}
            >
              <Field
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="off"
              />
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
