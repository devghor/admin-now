import React from 'react';
import { PageHeader } from '../../components/ui/page/PageHeader';
import { pathConstant } from '../../constants';
import { Button, Grid } from '@mui/material';
import ReactTable from '../../components/ui/table/ReactTable';
const Roles = () => {
  return (
    <>
      <PageHeader
        title="Roles"
        paths={[pathConstant.HOME, pathConstant.ACL_ROLES]}
        rightSection={<Button>Add</Button>}
      />
      <div>
        <Grid container>
          <Grid item md={12}>
            <ReactTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Roles;
