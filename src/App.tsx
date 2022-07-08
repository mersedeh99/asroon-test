import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";


import { Data } from './components/dataTable';
import { InsertAccount } from './components/insertAccount';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <header className='p-4'>
        <img src={logo} alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<Data/>} />
        <Route path="insert" element={<InsertAccount />} />
      </Routes>
      
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
