import React from 'react';
import { Button, Notification, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

function open(funcName) {
  Notification[funcName]({
    title: funcName,
    description: <p style={{ width: 320 }} rows={3} />,
  });
}

export default function SignInButton() {
  return (
    <ButtonToolbar className="frame">
      <h1>React Suite</h1>
      <Button appearance="primary" onClick={() => open('success')}>
        Sign In
      </Button>
    </ButtonToolbar>
  );
}
