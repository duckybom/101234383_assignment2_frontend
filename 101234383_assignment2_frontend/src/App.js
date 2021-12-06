import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import List from './tabs/listEmployee'
import Add from './tabs/addEmployee';
import Update from './tabs/updateEmployee';
import View from './tabs/viewEmployee';




function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Employee Management App</a>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
