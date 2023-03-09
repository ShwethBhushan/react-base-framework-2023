import React from 'react';
import DashboardLayout from '../DashboardLayout';
import DashboardNavbar from '../Navbars/DashboardNavbar';
import MDBox from '../../genericComponents/MDBox';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDTypography from '../../genericComponents/MDTypography';
import HorizontalStepper from './components/Steppers/Horizontal';
import HorizontalStepper2 from './components/Steppers/Horizontal/HorizontalStepper2';

const AudienceSegment = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Taxonomy Management
                </MDTypography>
              </MDBox>
              <MDBox pt={2}>
                <HorizontalStepper2 />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default AudienceSegment;
