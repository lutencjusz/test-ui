/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './primereact.css';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';

export default function PrimeButton() {
  let growl = useRef(null);

  const showSuccess = () => {
    growl.current.show({
      severity: 'success',
      summary: 'Success Message',
      detail: 'Order submitted',
    });
  };

  return (
    <div className="frame">
      <h1>Prime react</h1>
      <Button
        label="Success"
        className="p-button-success"
        onClick={showSuccess}
      />
      <div className="p-col-3 p-md-9">
        <Growl ref={growl} />
      </div>
    </div>
  );
}
