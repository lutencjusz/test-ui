import React, { useState } from 'react';
import { Button, Collapse } from 'shards-react';
//import 'shards-ui/dist/css/shards.min.css';

export default function VipBadge() {
  const [open, setOpen] = useState(false);
  return (
    <div className="frame">
      <h1>Shards-react</h1>
      <Button theme="success" onClick={() => setOpen(!open)}>
        Success
      </Button>
      <Collapse open={open}>
        <div className="p-3 mt-3 border rounded">
          <h5>😍 Now you see me!</h5>
          <span>
            In sagittis nibh non arcu viverra, nec imperdiet quam suscipit. Sed
            porta eleifend scelerisque. Vestibulum dapibus quis arcu a
            facilisis.
          </span>
        </div>
      </Collapse>
    </div>
  );
}
