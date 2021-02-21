import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import CalculateForm from './CalculateForm';
import CalculateResult from './CalculateResult';

export const CalculateContext = React.createContext();

function Main() {
  const [result, setResult] = useState(0);

  return (
    <CalculateContext.Provider value={{ result, setResult }}>
      <Grid container>
        <CalculateForm />
        <CalculateResult />
      </Grid>
    </CalculateContext.Provider>
  );
}

export default Main;
