import React, { Fragment } from "react";
import { Button, toaster } from "evergreen-ui";

export default function CancelButton() {
  return (
    <Fragment>
      <h1>Evergreen UI</h1>
      <Button
        marginRight={16}
        appearance="primary"
        onClick={() => toaster.success("Wysłano informacje o sukcesie", {
            description: 'To jest informacja z description',
            duration: 5,
            id: 'forbidden-action'
        })}
      >
        Główny
      </Button>
    </Fragment>
  );
}
