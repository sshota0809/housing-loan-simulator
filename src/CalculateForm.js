import { Grid } from '@material-ui/core';

function CalculateForm() {
  return (
    <Grid container>
        <Grid item xs={6}>
          <p>your age</p>
        </Grid>
        <Grid item xs={6}>
          <p>loan amount</p>
        </Grid>
        <Grid item xs={6}>
          <p>your salary</p>
        </Grid>
        <Grid item xs={6}>
          <p>interest rate</p>
        </Grid>
    </Grid>
  );
}
  
export default CalculateForm;
