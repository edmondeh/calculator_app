import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (!user || !accessToken || !refreshToken) {
      return navigate('/login');
    }
  }, []);

  return <>{children}</>;
};

export default Protected;
