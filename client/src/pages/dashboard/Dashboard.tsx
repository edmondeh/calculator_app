import React, { useEffect, useState } from 'react';
import { AppLayout } from '../../layouts';
import './dashbaord.scss';

const Dashboard = () => {
  const [pageTitle, setPageTitle] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    const currentHour = date.getHours();
    if (currentHour >= 12) {
      setPageTitle('Good Afternoon');
    } else {
      setPageTitle('Good Morning');
    }
  }, []);

  return (
    <AppLayout>
      <div className="app_dashboard app_page">
        <div className="app_page__title">
          <h1>{pageTitle}</h1>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
