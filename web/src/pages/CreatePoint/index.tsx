import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './styles.css';

const CreatePoint = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <Link to="/">
            <img src={logo} alt="App Coleta"/>
          </Link>
        </header>
        <main>
          <h1>Create Point</h1>
        </main>
      </div>
    </div>
  )
}

export default CreatePoint;

