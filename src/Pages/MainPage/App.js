import './App.scss';
import Nav from '../../Components/Nav/Nav'
import Header from '../../Components/Header/Header'
import Section from '../../Components/Section/Section'
import Footer from '../../Components/Footer/Footer';
import MainPage from '../../Pages/MainPage/App'
import { useState } from 'react'
import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import About from '../AboutPage/About'

function App() {
  const [search, setSearch] = useState('');
  return (
      <div className="App">
          <div className="container">               
            <Header />
            <Footer /> 

          </div>
          <Routes>
              <Route path='/' element={<MainPage />}></Route>
          </Routes>
      </div>
        
      

    
  );
}

export default App;