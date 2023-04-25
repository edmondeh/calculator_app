import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../pages';

export default [<Route path="/login" element={<Login />} key={Math.random()} />];
