import React from 'react';
import { Route } from 'react-router-dom';
import { Calculate, CalculationHistory, Dashboard } from '../pages';
import Protected from '../pages/protected-route/Protected';

export default [
  <Route
    path="/"
    element={
      <Protected>
        <Dashboard />
      </Protected>
    }
    key={Math.random()}
  />,
  <Route
    path="/calculate"
    element={
      <Protected>
        <Calculate />
      </Protected>
    }
    key={Math.random()}
  />,
  <Route
    path="/calculation_history"
    element={
      <Protected>
        <CalculationHistory />
      </Protected>
    }
    key={Math.random()}
  />,
];
