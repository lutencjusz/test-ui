import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignInButton } from './components'
import { VipBadge } from './components'
import { PrimeButton } from './components'
import { GestAltTest } from './components'
import { UsersList } from './components'
import { CancelButton } from './components'
import { ConfirmButton } from './components'
import { IsTest } from './hooks'
import { PassMaster } from './hooks'
import { Resolver } from './hooks'

//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ color: 'white' }}>To jest przykładowa aplikcja</h3>
        <p>Pokazuje działanie React Redux</p>
      </header>
      <div>
        <SignInButton />
        <VipBadge />
        <PrimeButton />
        <GestAltTest />
        <UsersList />
        <CancelButton />
        <ConfirmButton />
        <IsTest />
        <PassMaster />
        <Resolver />
      </div>
    </div>
  );
}

export default App;
