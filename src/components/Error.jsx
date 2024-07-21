import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>OOPs</h1>
      <h2>Error: Buddy, you got something wrong</h2>
      {error && (
        <h3>
          {error.status}: {error.statusText || error.message}
        </h3>
      )}
    </div>
  );
};

export default Error;
