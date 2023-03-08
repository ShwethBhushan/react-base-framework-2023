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
import React from "react";
import Card from "@mui/material/Card";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NoteIcon from '@mui/icons-material/Note';
// Material Dashboard 2 React components
import MDBox from "../../../../genericComponents/MDBox";
import MDTypography from "../../../../genericComponents/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "../TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Taxonomy Progress overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              Version# 51 - Current Active
            </MDTypography>{" "}
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="New Base Taxonomy Created"
          dateTime="3 Feb 7:20 PM"
        />
        <TimelineItem
          color="success"
          icon="inventory_2"
          title="New Audiences imported"
          dateTime="4 Feb 11:00 AM"
        />
        <TimelineItem
          color="success"
          icon="shopping_cart"
          title="Taxonomy Prepared & Sent for Review"
          dateTime="6 Feb 9:34 PM"
        />
        <TimelineItem
          color="success"
          icon="payment"
          title="Taxonomy Approved"
          dateTime="8 Feb 2:20 PM"
        />
        <TimelineItem
          color="success"
          icon="vpn_key"
          title="Taxonomy Exported"
          dateTime="9 Feb 4:54 PM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
