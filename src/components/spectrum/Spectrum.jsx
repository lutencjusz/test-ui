import React, { useState } from 'react';
import {
  Provider,
  ToggleButton,
  defaultTheme,
  Flex,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  ButtonGroup,
  TextField,
} from '@adobe/react-spectrum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faMoon } from '@fortawesome/free-solid-svg-icons';
import Is from 'is_js';

export default function Spectrum() {
  const [customTheme, setCustomTheme] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  let isValid = React.useMemo(() => Is.email(email), [email]);
  return (
    <div className="frame" style={{ position: 'relative' }}>
      <h1>Spectrum</h1>
      <br />
      <Provider
        theme={defaultTheme}
        colorScheme={customTheme ? 'dark' : 'light'}
      >
        <Flex direction="column" alignItems="center">
          <br />
          <Provider>
            <TextField
              label="Imię"
              placeholder="Podaj swoje Imię"
              value={firstName}
              onChange={setFirstName}
            />
            <TextField
              label="Nazwisko"
              placeholder="Podaj swoje Nazwisko"
              value={lastName}
              onChange={setLastName}
            />
            <TextField
              label="Email"
              placeholder="Podaj swój email"
              value={email}
              onChange={setEmail}
              validationState={isValid ? 'valid' : 'invalid'}
              inputMode="email"
            />
            <RadioGroup label="Ulubione zwierzę">
              <Radio value="dogs">Pies</Radio>
              <Radio value="cats">Kot</Radio>
              <Radio value="hip">Hipopotam</Radio>
            </RadioGroup>
            <Checkbox>Zapoznałem się z regulaminem.</Checkbox>
            <ButtonGroup>
              <Button variant="primary" type="submit">
                Zatwierdź
              </Button>
              <Button variant="secondary" type="reset">
                Usuń
              </Button>
            </ButtonGroup>
            <br />
          </Provider>
        </Flex>
        <ToggleButton
          isEmphasized
          isSelected={customTheme}
          onChange={setCustomTheme}
          position="absolute"
          top={10}
          right={10}
        >
          {customTheme ? (
            <FontAwesomeIcon icon={faStarOfLife} size="xs" />
          ) : (
            <FontAwesomeIcon icon={faMoon} size="xs" />
          )}
        </ToggleButton>
      </Provider>
    </div>
  );
}
