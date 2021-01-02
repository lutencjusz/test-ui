import React, { useState } from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, DarkTheme, ThemeProvider } from 'baseui';
import styled from 'styled-components';
import { Button, SIZE } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Field, Form } from 'react-final-form';
import { AdaptedRadioGroup } from 'baseui-final-form/radio-group';
import { adaptToFormControl } from 'baseui-final-form/form-control';
import { MaskedInput } from 'baseui/input';
import { adaptToInput } from 'baseui-final-form/input';
import { validate as validateEmail } from 'email-validator'; // add this package to your repo with `$ yarn add email-validator`
import { Input } from 'baseui/input';
import { useStyletron } from 'baseui';
import { Alert } from 'baseui/icon';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faMoon } from '@fortawesome/free-solid-svg-icons';
import { toaster, ToasterContainer } from 'baseui/toast';
import { Block } from 'baseui/block';

const engine = new Styletron();

const Centered = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
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

const itemProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
};

function Negative() {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        paddingRight: theme.sizing.scale500,
        color: theme.colors.negative400,
      })}
    >
      <Alert size="18px" />
    </div>
  );
}

export default function BaseUI() {
  const [theme, setTheme] = useState(THEME.light);
  const [value, setValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [isVisited, setIsVisited] = React.useState(false);
  const shouldShowError = !isValid && isVisited;

  const onChange = ({ target: { value } }) => {
    setIsValid(validateEmail(value));
    setValue(value);
  };

  return (
    <div className="frame" style={{ position: 'relative' }}>
      <h1>BaseUI</h1>
      <br />
      <h4>dodatkowo baseui-final-form</h4>

      <StyletronProvider value={engine}>
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
          <Centered theme={theme === THEME.light ? LightTheme : DarkTheme}>
            <ToasterContainer>
              <Button
                onClick={() =>
                  setTheme(theme === THEME.light ? THEME.dark : THEME.light)
                }
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                {theme === THEME.dark ? (
                  <FontAwesomeIcon icon={faStarOfLife} size="xs" />
                ) : (
                  <FontAwesomeIcon icon={faMoon} size="xs" />
                )}
              </Button>
              <Form
                onSubmit={(data) => {
                  console.log({ data });
                  let toastKey;
                  const msg = `${data.citi}`;
                  const ok = (
                    <Block
                      marginTop="15px"
                      display="flex"
                      justifyContent="center"
                    >
                      <Button
                        size={SIZE.compact}
                        onClick={() => toaster.clear(toastKey)}
                      >
                        Ok
                      </Button>
                    </Block>
                  );
                  const showMore = (
                    <Block
                      marginTop="15px"
                      display="flex"
                      justifyContent="left"
                    >
                      <Button
                        size={SIZE.compact}
                        onClick={() =>
                          toaster.update(toastKey, {
                            children: (
                              <>
                                {msg} to show different notification type. {ok}
                              </>
                            ),
                          })
                        }
                      >
                        Show more
                      </Button>
                    </Block>
                  );
                  toastKey = toaster.info(
                    <>
                      {msg}
                      {showMore}
                    </>,
                    {
                      onClose: () => console.log('Toast closed.'),
                      overrides: {
                        InnerContainer: { style: { width: '100%' } },
                      },
                    }
                  );
                }}
                initialValues={{ citi: 'warszawa', phoneNumber: '48' }}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <br />
                    <Field
                      name="name"
                      label="Imię"
                      render={(props) => {
                        return (
                          <FormControl {...adaptToFormControl(props)}>
                            <Input
                              {...adaptToInput(props)}
                              placeholder="Podaj swoje Imię"
                              required
                            />
                          </FormControl>
                        );
                      }}
                    />
                    <Field
                      name="secondName"
                      label="Nazwisko"
                      render={(props) => {
                        return (
                          <FormControl {...adaptToFormControl(props)}>
                            <Input
                              {...adaptToInput(props)}
                              placeholder="Podaj swoje Nazwisko"
                              required
                            />
                          </FormControl>
                        );
                      }}
                    />
                    <Field
                      name="phoneNumber"
                      label="Numer telefonu"
                      render={(props) => {
                        return (
                          <FormControl
                            {...adaptToFormControl(props)}
                            error={
                              shouldShowError
                                ? 'Wprowadź właściwy numer telefonu'
                                : null
                            }
                          >
                            <MaskedInput
                              {...adaptToInput(props)}
                              placeholder="Numer telefonu"
                              mask="(+99) 999-999-999"
                              error={shouldShowError}
                              overrides={
                                shouldShowError ? { After: Negative } : {}
                              }
                            />
                          </FormControl>
                        );
                      }}
                    />
                    <Field
                      name="email"
                      label="Email"
                      render={(props) => {
                        return (
                          <FormControl
                            {...adaptToFormControl(props)}
                            error={
                              shouldShowError ? 'Wprowadź właściwy email' : null
                            }
                          >
                            <Input
                              {...adaptToInput(props)}
                              value={value}
                              onChange={onChange}
                              onBlur={() => setIsVisited(true)}
                              error={shouldShowError}
                              overrides={
                                shouldShowError ? { After: Negative } : {}
                              }
                              type="email"
                              placeholder="Twój email"
                              required
                            />
                          </FormControl>
                        );
                      }}
                    />
                    <Field
                      name="citi"
                      component={AdaptedRadioGroup}
                      caption="Wybierz swoje ulubione miasto"
                      label="Miasto"
                      options={[
                        { id: 'warszawa', label: 'Warszawa' },
                        { id: 'lodz', label: 'Łódź' },
                        { id: 'katowice', label: 'Katowice', disabled: true },
                        { id: 'lublin', label: 'Lublin' },
                        { id: 'krakow', label: 'Kraków' },
                      ]}
                      overrides={{
                        RadioMark: {
                          style: ({ $theme }) => ({
                            borderColor: $theme.colors.positive,
                          }),
                        },
                      }}
                    />
                    <FlexGrid
                      flexGridColumnCount={2}
                      flexGridColumnGap="scale800"
                      flexGridRowGap="scale800"
                    >
                      <FlexGridItem {...itemProps}>
                        <Button type="submit" disabled={pristine || invalid}>
                          Zapisz
                        </Button>
                      </FlexGridItem>
                      <FlexGridItem {...itemProps}>
                        <Button type="reset" disabled={pristine || invalid}>
                          Usuń
                        </Button>
                      </FlexGridItem>
                    </FlexGrid>
                    <br />
                  </form>
                )}
              />
            </ToasterContainer>
          </Centered>
        </ThemeProvider>
      </StyletronProvider>
    </div>
  );
}
