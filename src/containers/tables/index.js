/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../genericComponents/MDBox";
import MDTypography from "../../genericComponents/MDTypography";
import TaxonomyMainGrid from "./data/TaxonomyMainGrid";
// Material Dashboard 2 React example components
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardNavbar from "../../layouts/Navbars/DashboardNavbar";
import HorizontalNonLinearStepper from '../../components/Stepper'
// import DataTable from "examples/Tables/DataTable";

// Data

function Tables() {  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <HorizontalNonLinearStepper />
    </DashboardLayout>
  );
}

export default Tables;
