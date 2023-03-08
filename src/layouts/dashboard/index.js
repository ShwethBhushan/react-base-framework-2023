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
// import Grid from "@mui/material/Grid";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import React from "react";
import DashboardLayout from "../DashboardLayout";
import DashboardNavbar from "../Navbars/DashboardNavbar";
import MDBox from "../../genericComponents/MDBox";
import ReportsBarChart from "../../components/charts/ReportsBarChart";
import ReportsLineChart from "../../components/charts/LineChart/ReportsLineChart";
import ComplexStatisticsCard from "../../components/UIComponents/ComplexStatisticsCard";
import { Grid } from "@mui/material";
// Data
import reportsBarChartData from "../../components/charts/ReportsBarChart/data/reportsBarChartData";
import reportsLineChartData from "../../components/charts/LineChart/ReportsLineChart/data/reportsLineChartData";


// Dashboard components

import TaxonomyGrid from "../../components/Features/Datagrid/TaxonomyGrid";
import OrdersOverview from "./components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="In Progress Taxonomy Version"
                count={52}
                percentage={{
                  color: "success",
                  amount: "Created",
                  label: "5 days ago",
                }}
              />
            </MDBox>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Taxonomy Status"
                count="Next Active"
                percentage={{
                  color: "success",
                  amount: "Submitted for Review ",
                  label: "2 days ago",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="No of Audience Segments in Current Taxonomy"
                count="2780"
                percentage={{
                  color: "success",
                  amount: "+ 120 Audience Segments",
                  label: "new in current taxonomy",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Number of Archieved Taxonomies"
                count="49"
                percentage={{
                  color: "success",
                  amount: "+2",
                  label: "archieved last month",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Taxonomies Per Month"
                  description="1 Taxonomy Created in a Month"
                  date="In Progress taxonomy created 5 days ago."
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="New Audiences"
                  description={
                    <>
                      No of new Audiences added in each Taxonomy Version.
                    </>
                  }
                  date="20 new Audiences added in Next Active taxonomy 2 days ago."
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Audience Segments"
                  description="Number of Audience Segments added in each Taxonomy versions"
                  date="2780 total Audience Segments"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>

              <TaxonomyGrid />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
