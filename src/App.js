import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Paper from '@material-ui/core/Paper';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuspenseErrorBoundary } from './components';
import { styles } from './constaints';

const MaterialUI = React.lazy(() => import('./components/materialUI'));
const Rsuite = React.lazy(() => import('./components/rsuite'));
const PrimeButton = React.lazy(() => import('./components/primereact'));
const GestAltTest = React.lazy(() => import('./components/gestalt'));
const CancelButton = React.lazy(() => import('./components/evergreen'));
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
const UseReducer = React.lazy(() => import('./hooks/useReducer'));
const Spectrum = React.lazy(() => import('./components/spectrum'));
const GoJS = React.lazy(() => import('./components/goJS'));
const ReactAdmin = React.lazy(() => import('./components/reactAdmin'));
const AwesomeButtonDemo = React.lazy(() =>
  import('./components/awesomeButtonDemo')
);
const StyledContentLoader = React.lazy(() =>
  import('./components/styledContentLoader')
);
const ReactNil = React.lazy(() => import('./components/reactNil'));
const darkTheme = {
  palette: {
    type: 'dark',
  },
};
const lightTheme = {
  palette: {
    type: 'light',
  },
};

function App() {
  const [themeState, setThemeState] = useState(false);

  const icon = useMemo(
    () =>
      themeState ? (
        <WbSunnyOutlinedIcon style={themeState.ThemeButton} />
      ) : (
        <Brightness3Icon style={themeState.ThemeButton} />
      ),
    [themeState]
  );

  //const appliedTheme = createMuiTheme(themeState ? darkTheme : lightTheme);
  const appliedTheme = useMemo(
    () => createMuiTheme(themeState ? darkTheme : lightTheme),
    [themeState]
  );

  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper>
        <Router>
          {/* Musi być, żeby zadziałała dynamiczna zmiana ThemeProvider */}
          <div className="App">
            <header className="App-header">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="mode"
                onClick={() => setThemeState(!themeState)}
                style={styles.ThemeButton}
                size="small"
              >
                {icon}
              </IconButton>
              <img src={logo} className="App-logo" alt="logo" />
              <h2 style={{ color: 'white' }}>To jest przykładowa aplikacja</h2>
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
                    <Rsuite />
                    <MaterialUI />
                    <PrimeButton />
                    <GestAltTest />
                    <CancelButton />
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
                    <ReactAdmin theme={appliedTheme} />
                  </SuspenseErrorBoundary>
                </Route>
                <Route exact path="/hooks">
                  <SuspenseErrorBoundary>
                    <Resolver />
                    <GetData />
                    <DemoCookie />
                    <DemoLatest />
                    <DemoUseCss />
                    <UseReducer />
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
      </Paper>
    </ThemeProvider>
  );
}

export default App;
