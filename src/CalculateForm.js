import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

function CalculateForm() {
  const [age, setAge] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [salary, setSalary] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [result, setResult] = useState(0);

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
            label="Your Age"
            onChange={onChangeAge}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Loan Amount"
            onChange={onLoanAmount}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Your Salary"
            onChange={onSalary}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Interest Rate"
            onChange={onInterestRate}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={calcurateResult}
            variant="outlined"
          >
            Click me
          </Button>
        </Grid>
        <Grid item xs={12}>
          {result}
        </Grid>
    </Grid>
  );
}
  
export default CalculateForm;
