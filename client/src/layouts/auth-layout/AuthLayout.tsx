import React from 'react';
import { AuthProps } from './auth-layout-prop.type';
import './auth-layout.scss';

const AuthLayout = ({ children }: AuthProps) => {
  return (
    <div className="app_auth">
      <div className="app_auth__card">{children}</div>
    </div>
  );
};

export default AuthLayout;
