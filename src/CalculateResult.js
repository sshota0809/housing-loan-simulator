import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';

import { CalculateContext } from './Main';

function CalculateResult() {
  const { result } = useContext(CalculateContext)

  return (
    <Grid container>
      <p>This component is CalculateResult.</p>
      <p>{ result }</p>
    </Grid>
  );
}

export default CalculateResult;
  