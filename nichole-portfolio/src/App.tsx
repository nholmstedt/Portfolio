import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// This is the main file that builds your app. so you need to assemble everything here.

const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
  );
};

export default App;
