import React, { useState } from 'react';
import {
  Provider,
  ToggleButton,
  defaultTheme,
  Form,
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
import { I18nProvider } from '@react-aria/i18n';

export default function Spectrum() {
  const [customTheme, setCustomTheme] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [selected, setSelected] = useState('dogs');

  let isValidEmail = React.useMemo(() => Is.email(email), [email]);
  let isValidFirstName = React.useMemo(() => !Is.empty(firstName), [firstName]);
  let isValidCheck = React.useMemo(() => check, [check]);

  const reset = () => {
    setFirstName(undefined);
    setLastName(undefined);
    setEmail(undefined);
    setCheck(false);
    setSelected('dogs');
  };

  return (
    <div className="frame" style={{ position: 'relative' }}>
      <I18nProvider locale="fr-FR">
        <h1>Spectrum</h1>
        <Provider
          theme={defaultTheme}
          colorScheme={customTheme ? 'dark' : 'light'}
          width={'80vw'}
          margin={'5vw'}
        >
          <Form
            isRequired
            necessityIndicator="icon"
            maxWidth={'40%'}
            marginStart={'5vw'}
            isQuiet
            labelPosition="top"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                `Wartości: ${firstName}, ${lastName}, ${email}, ${selected}, regulamin: ${check}`
              );
            }}
          >
            <Provider>
              <br />
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
                isRequired={false}
                marginTop={20}
              />
              <TextField
                label="Email"
                placeholder="Podaj swój email"
                value={email}
                onChange={setEmail}
                validationState={isValidEmail ? 'valid' : 'invalid'}
                inputMode="email"
                marginTop={20}
              />
              <RadioGroup
                label="Ulubione zwierzę"
                defaultValue="dogs"
                value={selected}
                onChange={setSelected}
              >
                <Radio value="dogs">Pies</Radio>
                <Radio value="cats">Kot</Radio>
                <Radio value="hip">Hipopotam</Radio>
              </RadioGroup>
              <Checkbox isSelected={check} onChange={setCheck}>
                Zapoznałem się z regulaminem.
              </Checkbox>
              <ButtonGroup>
                <Button
                  variant="primary"
                  type="submit"
                  isDisabled={
                    !isValidEmail || !isValidFirstName || !isValidCheck
                  }
                >
                  Zatwierdź
                </Button>
                <Button variant="negative" type="reset" onPress={() => reset()}>
                  Usuń
                </Button>
              </ButtonGroup>
              <br />
            </Provider>
          </Form>
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
      </I18nProvider>
    </div>
  );
}
