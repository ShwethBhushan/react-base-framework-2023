import {Stack} from '@mui/system';
import React from 'react';
import Export from '../../../../../../components/Features/Export';
import {Button, Typography} from '@mui/material';
import MDBox from '../../../../../../genericComponents/MDBox';
import MDTypography from '../../../../../../genericComponents/MDTypography';
import ImportDataGrid from '../../../DataGrid';
import ImportGridAction from '../../../DataGrid/gridAction';

const exportRows = [
  {
       id: 1,
       VersionNo: 53,
        Staus: 'Current Active',
       ExportedDate: '03/01/2023',
       ExportedDestination: 'AWS S3 Bucket' 
    },
     {
        id: 1,
        VersionNo: 52,
       Staus: 'Prior',
        ExportedDate: '02/01/2023',
        ExportedDestination: 'AWS S3 Bucket' 
    },
     {
        id: 1,
        VersionNo: 51,
       Staus: 'Archieve',
        ExportedDate: '01/01/2023',
        ExportedDestination: 'AWS S3 Bucket' 
    },
     {
        id: 1,
        VersionNo: 50,
       Staus: 'Archieve',
        ExportedDate: '12/01/2022',
        ExportedDestination: 'AWS S3 Bucket' 
    },
     {
        id: 1,
        VersionNo: 49,
       Staus: 'Archieve',
        ExportedDate: '11/01/2022',
        ExportedDestination: 'AWS S3 Bucket' 
    } 
];

const exportColumns = [
  { field: "VersionNo",
   renderHeader: () => <strong className="headername">{"Version Number "}</strong>,
    width: 300,
    editable: true,
  },
  {
      field: "Staus",
      renderHeader: () => <strong className="headername">{"Status "}</strong>,
      width: 300,
      editable: true,
  },
  {
      field: "ExportedDate",
      renderHeader: () => <strong className="headername">{"Exported Date"}</strong>,
      width: 300,
      editable: true,
   },
   { 
      field: "ExportedDestination",
      renderHeader: () => <strong className="headername">{"Destination"}</strong>,
      width: 250,
      editable: true,
   },
  ];

const ThirdComponent = () => {
  return (
    <Stack>
    <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
      <MDBox>
        <MDTypography variant="h4" gutterBottom>
          Export
        </MDTypography>
        </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
        <ImportDataGrid rows={exportRows} columns={exportColumns} />
        </MDBox>
    </Stack>
  );
};

export default ThirdComponent;
