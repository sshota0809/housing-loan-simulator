import { Grid } from '@material-ui/core';

import CalculateForm from './CalculateForm';
import CalculateResult from './CalculateResult';

function Main() {
  return (
    <Grid container>
      <CalculateForm />
      <CalculateResult />
    </Grid>
  );
}

export default Main;
