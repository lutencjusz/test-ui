import React, { useState } from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, DarkTheme, ThemeProvider } from 'baseui';
import styled from 'styled-components';
//import { ButtonGroup } from 'baseui/button-group';
import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
const engine = new Styletron();

//   display: flex,
//   flexWrap: wrap,
//   justifyContent: center,
//   alignItems: center,
//   height: 100%,

const Centered = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80vw;
  margin-left: 5vw;
  background-color: ${(props) =>
    props.theme === DarkTheme ? 'black' : 'white'};
`;

const THEME = {
  light: 'light',
  dark: 'dark',
};

export default function BaseUI() {
  const [theme, setTheme] = useState(THEME.light);
  return (
    <div className="frame">
      <h1>BaseUI</h1>
      <StyletronProvider value={engine}>
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
          <Centered theme={theme === THEME.light ? LightTheme : DarkTheme}>
            <form onSubmit={(e) => e.preventDefault()}>
              <FormControl
                label={() => 'Podaj Imię'}
                caption={() => 'name'}
                positive="Wartość poprawna"
                error={null}
              >
                <Input />
              </FormControl>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </form>
            <Button
              onClick={() =>
                setTheme(theme === THEME.light ? THEME.dark : THEME.light)
              }
            >
              Toggle light/dark theme!
            </Button>
          </Centered>
        </ThemeProvider>
      </StyletronProvider>
    </div>
  );
}
