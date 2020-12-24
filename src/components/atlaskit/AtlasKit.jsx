import React, { useState } from 'react';
import Button from '@atlaskit/button';
import Banner from '@atlaskit/banner';

export default function ConfirmButton() {
  const [isOpen, setIsOpen] = useState(true);

  const WarningBanner = (isOpen = true) => (
    <Banner isOpen={isOpen} appearance="warning">
      This is a warning banner
    </Banner>
  );

  return (
    <div className="frame">
      <h1>AtlasKit</h1>
      <Button appearance="primary" onClick={() => setIsOpen(!isOpen)}>
        Confirm
      </Button>
      <WarningBanner isOpen={isOpen} />
    </div>
  );
}
