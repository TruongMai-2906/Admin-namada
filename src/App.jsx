import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import List from './pages/List';
import { RecoilRoot } from 'recoil';
import Detail from './pages/Detail';
import '@/styles/variable.scss';

const App = () => {
  
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/validators" />} />
            <Route path="validators" element={<List />} />
            <Route path="validators/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;