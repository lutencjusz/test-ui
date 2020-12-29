import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignInButton } from './components';
import { VipBadge } from './components';
import { PrimeButton } from './components';
import { GestAltTest } from './components';
import { UsersList } from './components';
import { CancelButton } from './components';
import { ConfirmButton } from './components';
import { AntD } from './components';
import { DnD } from './components';
import { Victory } from './components';
import { Recharts } from './components';
import { StyledContentLoader } from './components';
import { ReactNil } from './components';
import { IsTest } from './hooks';
import { PassMaster } from './hooks';
import { Resolver } from './hooks';
import { GetData } from './hooks';
import { DemoCookie } from './hooks';
import { DemoLatest } from './hooks';
import { DemoUseCss } from './hooks';

//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ color: 'white' }}>To jest przykładowa aplikacja</h3>
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
        <GetData />
        <DemoCookie />
        <DemoLatest />
        <DemoUseCss />
        <DnD />
        <AntD />
        <Victory />
        <Recharts />
        <StyledContentLoader />
        <ReactNil />
      </div>
    </div>
  );
}

export default App;
