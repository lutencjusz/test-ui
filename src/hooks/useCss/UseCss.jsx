import React, { Fragment, useState } from "react";
import { useCss } from "react-use";
import { LoadingIndicator } from "../../components";

const DemoUseCss = () => {
  const [params, setParams] = useState({
    color: "red",
    backgroundColor: "yellow",
  });
  const className = useCss({
    border: `4px solid ${params.color}`,
    backgroundColor: params.backgroundColor,
    "&:hover": {
      backgroundColor: "green",
    },
  });

  return (
    <Fragment>
      <br />
      <h1>UseCss</h1>
      <LoadingIndicator className={className} />
    </Fragment>
  );
};

export default DemoUseCss;
