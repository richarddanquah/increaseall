import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Sidebar from './components/Sidebar';

export default function App(){
  return (
    <BrowserRouter>
    <div className="max-h-screen overflow-hidden">
      <div className="flex" style={{ height: "100vh" }}>
        <Sidebar />
   
  
    <Routes>
      <Route path='/' element={<Search />}/>
    </Routes>
    </div>
    </div>
  </BrowserRouter>
  )
   
}
