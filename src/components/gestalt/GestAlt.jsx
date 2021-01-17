import React, { useRef } from 'react';
import { Button, Heading, Modal, Box, Layer, TextField } from 'gestalt';
import 'gestalt/dist/gestalt.css';

export default function GestAltTest() {
  const [selected, setSelected] = React.useState(false);
  const [value, setValue] = React.useState('');
  const anchorRef = useRef();
  return (
    <div className="frame">
      <Heading align="center" size="lg">
        GestAlt
      </Heading>
      <Button
        inline
        color="blue"
        textColor="red"
        selected={selected}
        onClick={() => {
          setSelected(!selected);
        }}
        text={selected ? 'Zaznaczony' : 'Odznaczony'}
      />
      {selected ? (
        <Layer>
          <Modal
            accessibilityModalLabel="View default padding and styling"
            heading="Small modal"
            closeOnOutsideClick={true}
            onDismiss={() => setSelected(false)}
            footer={<Heading size="sm">Footer</Heading>}
            size="sm"
          >
            <Box padding={8}>
              <Heading size="md">Children</Heading>
            </Box>
          </Modal>
        </Layer>
      ) : null}
      <Box
        display="flex"
        marginLeft="auto"
        marginRight="auto"
        marginBottom={-3}
        marginTop={-3}
        width="60%"
        wrap
        direction="column"
        justifyContent="center"
      >
        <Box flex="grow" paddingX={3} paddingY={3}>
          <TextField
            ref={anchorRef}
            id="firstName"
            onChange={({ value }) => setValue(value)}
            errorMessage={!value ? 'Pole nie może być puste' : null}
            placeholder="Podaj swoje Imię"
            label="Imię"
            value={value}
            type="text"
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={5}>
          <TextField
            id="email"
            onChange={({ value }) => setValue(value)}
            errorMessage={!value ? 'Pole nie może być puste' : null}
            placeholder="Add email"
            label="Email"
            value={value}
            type="email"
            rounding={1}
          />
        </Box>
        <Box flex="grow" paddingX={3} paddingY={3}>
          <Box
            justifyContent="end"
            marginStart={-1}
            marginRight={-1}
            marginTop={-3}
            marginBottom={1}
            display="flex"
            wrap
          >
            <Box paddingX={1} paddingY={1}>
              <Button text="Usuń" size="lg" inline />
            </Box>
            <Box paddingX={1} paddingY={1}>
              <Button text="Zatwierdź" color="red" size="lg" type="submit" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
