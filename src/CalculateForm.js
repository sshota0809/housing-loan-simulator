import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';

function CalculateForm() {
  const [age, setAge] = useState(0);

  const onChangeAge = event => {
    setAge(event.target.value);
  };

  return (
    <Grid container>
        <Grid item xs={6}>
          <TextField
            required
            label="Your Age"
            onChange={onChangeAge}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Loan Amount"
            // onChange={handler}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Your Salary"
            // onChange={handler}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Interest Rate"
            // onChange={handler}
          />
        </Grid>
    </Grid>
  );
}
  
export default CalculateForm;
