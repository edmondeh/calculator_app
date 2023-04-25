import React from 'react';
import { Route } from 'react-router-dom';
import { Calculate, CalculationHistory, Dashboard } from '../pages';

export default [
  <Route path="/" element={<Dashboard />} key={Math.random()} />,
  <Route path="/calculate" element={<Calculate />} key={Math.random()} />,
  <Route
    path="/calculation_hisotry"
    element={<CalculationHistory />}
    key={Math.random()}
  />,
];
