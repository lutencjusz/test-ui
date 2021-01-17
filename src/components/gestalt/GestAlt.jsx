import React from 'react';
import { Button, Heading, Modal, Box, Layer } from 'gestalt';
import 'gestalt/dist/gestalt.css';

export default function GestAltTest() {
  const [selected, setSelected] = React.useState(false);

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
    </div>
  );
}
