import React from 'react';
import { RoutesPath } from './config/routes/RoutesPath.routes';

export function App(props: any) {
  return (
    <React.Fragment>
      <RoutesPath {...props} />
    </React.Fragment>
  );
}


