import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { SuspenseErrorBoundary } from './components';

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
const BaseUI = React.lazy(() => import('./components/baseUI'));
const PreciseUI = React.lazy(() => import('./components/preciseUI'));
const IsTest = React.lazy(() => import('./hooks/is'));
const PassMaster = React.lazy(() => import('./hooks/passMaster'));
const Resolver = React.lazy(() => import('./hooks/useEffect'));
const GetData = React.lazy(() => import('./hooks/useFetch'));
const DemoCookie = React.lazy(() => import('./hooks/useCookie'));
const DemoLatest = React.lazy(() => import('./hooks/useLatest'));
const DemoUseCss = React.lazy(() => import('./hooks/useCss'));
const Spectrum = React.lazy(() => import('./components/spectrum'));
const GoJS = React.lazy(() => import('./components/goJS'));
const AwesomeButtonDemo = React.lazy(() =>
  import('./components/awesomeButtonDemo')
);
const StyledContentLoader = React.lazy(() =>
  import('./components/styledContentLoader')
);
const ReactNil = React.lazy(() => import('./components/reactNil'));

//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 style={{ color: 'white' }}>To jest przykładowa aplikacja</h3>
          <p>Pokazuje działanie React oraz bibliotek</p>
          <nav>
            <ul>
              <li>
                <Link to="/#/" className="a">
                  Formularze
                </Link>
              </li>
              <li>
                <Link to="/aplikacje" className="a">
                  Aplikacje
                </Link>
              </li>
              <li>
                <Link to="/hooks" className="a">
                  Hooks
                </Link>
              </li>
              <li>
                <Link to="/wykresy" className="a">
                  Wykresy
                </Link>
              </li>
              <li>
                <Link to="/grafy" className="a">
                  Grafy
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
            <Route exact path="/">
              <SuspenseErrorBoundary>
                <StyledContentLoader />
                <SignInButton />
                <VipBadge />
                <PrimeButton />
                <GestAltTest />
                <CancelButton />
                <ConfirmButton />
                <PassMaster />
                <AntD />
                <PreciseUI />
                <Spectrum />
                <BaseUI />
              </SuspenseErrorBoundary>
            </Route>
            <Route exact path="/aplikacje">
              <SuspenseErrorBoundary>
                <DnD />
                <IsTest />
                <ReactNil />
                <UsersList />
              </SuspenseErrorBoundary>
            </Route>
            <Route exact path="/hooks">
              <SuspenseErrorBoundary>
                <Resolver />
                <GetData />
                <DemoCookie />
                <DemoLatest />
                <DemoUseCss />
              </SuspenseErrorBoundary>
            </Route>
            <Route exact path="/wykresy">
              <SuspenseErrorBoundary>
                <Victory />
                <Recharts />
              </SuspenseErrorBoundary>
            </Route>
            <Route exact path="/grafy">
              <SuspenseErrorBoundary>
                <AwesomeButtonDemo />
                <GoJS />
              </SuspenseErrorBoundary>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
