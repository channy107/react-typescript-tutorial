import React from 'react';
import './App.css';
import Dashboard from "./secure/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./secure/Users";
import Login from "./public/Login";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Route path={'/'} exact component={Dashboard}/>
                <Route path={'/users'} component={Users}/>
                <Route path={'/login'} component={Login}/>
            </BrowserRouter>
    </div>
  );
}

export default App;
