import React from 'react';
import { AuthLayout } from '../../layouts';
import './login.scss';

const Login = () => {
  return (
    <AuthLayout>
      <div className="app_auth__title">
        <h3>Login</h3>
      </div>
      <form className="app_auth__form">
        <div className="app_auth__form__input app_auth__form__input--error">
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div className="app_auth__form__input">
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div className="app_auth__form__submit">
          <button type="submit">Login</button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
