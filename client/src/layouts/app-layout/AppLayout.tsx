import React from 'react';
import { AppLayoutProp } from './app-layout-prop.type';
import { Navbar, Sidebar } from '../../components';
import './app-layout.scss';

const AppLayout = ({ children }: AppLayoutProp) => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="app_conainer">{children}</div>
    </>
  );
};

export default AppLayout;
