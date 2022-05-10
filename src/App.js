import './App.css';
import React, {useState} from 'react';
import Navbar from './navbar';
//import { useNavigate } from "react-router-dom";
//import {Navigate} from 'react-router-dom';

const Univeristies = () => {
  const [unis, setUnis] = useState([]);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {   
      return (
          <div className="app">
              <Navbar />

              <br/><br/>
              <div className='title'>CS 470 DB Project</div>
              <br/><br/><br/><br/>
              
              <div className='container'>
                <div className='col'>
                  <br/><br/>
                  <ul>Welcome to our CS470 Project</ul>
                  <br/>
                  <ul>Click one of the navigation bar buttons above to continue.</ul>
                  <br/><br/><br/><br/><br/><br/>
                </div>
              </div>
              <br/>
          </div>
      );
  }
}

export default App;