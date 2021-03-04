import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';

import { CalculateContext } from './Main';

function CalculateResult() {
  const { result } = useContext(CalculateContext)

  return (
    <Grid container>
      {result !== 0
          ? <p>{ result }</p>
          : <p></p>
      }
      This component is CalculateResult.
    </Grid>
  );
}

export default CalculateResult;
  