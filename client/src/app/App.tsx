import React from 'react';
import { AppProps } from './app-prop.type';
import './App.css';

function App({ children }: AppProps) {
  return <div className="App">{children}</div>;
}

export default App;
