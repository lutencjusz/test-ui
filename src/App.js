import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PreciseUI, SuspenseErrorBoundary } from './components';
//import { SignInButton } from './components';
//import { VipBadge } from './components';
//import { PrimeButton } from './components';
//import { GestAltTest } from './components';
//import { UsersList } from './components';
//import { CancelButton } from './components';
//import { ConfirmButton } from './components';
//import { AntD } from './components';
//import { DnD } from './components';
//import { Victory } from './components';
//import { Recharts } from './components';
//import { StyledContentLoader } from './components';
//import { ReactNil } from './components';
//import { Windmill } from './components';
//import { IsTest } from './hooks';
//import { PassMaster } from './hooks';
//import { Resolver } from './hooks';
//import { GetData } from './hooks';
//import { DemoCookie } from './hooks';
//import { DemoLatest } from './hooks';
//import { DemoUseCss } from './hooks';

const SignInButton = React.lazy(() => import('./components/rsuite'));
const VipBadge = React.lazy(() => import('./components/shards-react'));
const PrimeButton = React.lazy(() => import('./components/primereact'));
const GestAltTest = React.lazy(() => import('./components/gestalt'));
const UsersList = React.lazy(() => import('./components/reactVirtualized'));
const CancelButton = React.lazy(() => import('./components/evergreen'));
const ConfirmButton = React.lazy(() => import('./components/atlaskit'));
const AntD = React.lazy(() => import('./components/antd'));
const DnD = React.lazy(() => import('./components/DnD'));
const Victory = React.lazy(() => import('./components/victory'));
const Recharts = React.lazy(() => import('./components/recharts'));
const Windmill = React.lazy(() => import('./components/windmill'));
const BaseUI = React.lazy(() => import('./components/baseUI'));
const IsTest = React.lazy(() => import('./hooks/is'));
const PassMaster = React.lazy(() => import('./hooks/passMaster'));
const Resolver = React.lazy(() => import('./hooks/useEffect'));
const GetData = React.lazy(() => import('./hooks/useFetch'));
const DemoCookie = React.lazy(() => import('./hooks/useCookie'));
const DemoLatest = React.lazy(() => import('./hooks/useLatest'));
const DemoUseCss = React.lazy(() => import('./hooks/useCss'));
const Spectrum = React.lazy(() => import('./components/spectrum'));
const StyledContentLoader = React.lazy(() =>
  import('./components/styledContentLoader')
);
const ReactNil = React.lazy(() => import('./components/reactNil'));

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
        <SuspenseErrorBoundary>
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
          <Windmill />
          <BaseUI />
          <PreciseUI />
          <Spectrum />
        </SuspenseErrorBoundary>
      </div>
    </div>
  );
}

export default App;
