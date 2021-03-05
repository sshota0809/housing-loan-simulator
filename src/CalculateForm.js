import React, { useState, useContext } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

import { CalculateContext } from './Main';

function CalculateForm() {
  const [age, setAge] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [salary, setSalary] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  const { setResult } = useContext(CalculateContext)

  const onChangeAge = event => {
    setAge(event.target.value);
  };

  const onLoanAmount = event => {
    setLoanAmount(event.target.value);
  };

  const onSalary = event => {
    setSalary(event.target.value);
  };

  const onInterestRate = event => {
    setInterestRate(event.target.value);
  };

  const calcurateResult = () => {
    setResult(Number(loanAmount) * (1 + Number(interestRate)))
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <TextField
          required
          id="age"
          label="Your Age"
          onChange={onChangeAge}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          id="loan"
          label="Loan Amount"
          onChange={onLoanAmount}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          id="salary"
          label="Your Salary"
          onChange={onSalary}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          id="interest"
          label="Interest Rate"
          onChange={onInterestRate}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          id="result-button"
          onClick={calcurateResult}
          variant="outlined"
        >
          Click me
        </Button>
      </Grid>
    </Grid>
  );
}
  
export default CalculateForm;
