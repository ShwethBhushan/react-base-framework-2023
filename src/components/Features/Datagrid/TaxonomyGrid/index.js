import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
// Material Dashboard 2 React components
import MDBox from "../../../../genericComponents/MDBox";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MDTypography from "../../../../genericComponents/MDTypography";
import TaxonomyGridAction from './TaxonomyGridAction';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const rows = [
    { id: 1, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 2, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 3, col1: '11717', col2: 'P11717_H', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 4, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 5, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 6, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 7, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 8, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 9, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
    { id: 10, col1: '11716', col2: 'P11717_G', col3: '1171800', col4: 'BaseTest', col5: 'G', col6: 'MockDesc', col7: 'Y', col8: '1.66', col9: 'Folder1>Folder2<Folder3', col10: '' },
];

const columns = [
    { field: 'col1', headerName: 'System ID', width: 80 },
    { field: 'col2', headerName: 'Onboarder Id', width: 80 },
    { field: 'col3', headerName: 'Taxonomy Id', width: 150 },
    { field: 'col4', headerName: 'Taxonomy Name', width: 200 },
    { field: 'col5', headerName: 'Sub Group', width: 80, editable: true },
    { field: 'col6', headerName: 'Description', width: 150, editable: true },
    { field: 'col7', headerName: 'Royalty', width: 80, editable: true },
    { field: 'col8', headerName: 'DPCM', width: 100, editable: true },
    { field: 'col9', headerName: 'Taxonomy Path', width: 300, editable: true },
    { field: 'col10', headerName: 'Actions', width: 100 },
];

export default function TaxonomyGrid() {

    const rowsData = [
        {
            id: 1,
            systemId: 51,
            taxonomyId: 'Current Active',
            onBoarderId: "23/02/2023 08:00 PM",
            taxonomyName: "test1",
            subGroup: "test1",
            description: "test1",
            royalty: "test1",
            dcpm: "test1",
            taxonomyPath: "test1",
            daLineItem: "test1",
            daLineItemName: "test1",
            createdBy: "Barbara",
            ReviewedBy: "Hale Steve"
        },
        {
            id: 12,
            systemId: 50,
            taxonomyId: 'Prior',
            onBoarderId: "23/02/2023 08:00 PM",
            taxonomyName: "test2",
            subGroup: "test2",
            description: "test2",
            royalty: "test2",
            dcpm: "test2",
            taxonomyPath: "test2",
            daLineItem: "test2",
            daLineItemName: "test2",
            createdBy: "John",
            ReviewedBy: "Hale Steve"
        },
        {
            id: 3,
            systemId: 49,
            taxonomyId: 'Archieved',
            onBoarderId: "23/02/2023 08:00 PM",
            taxonomyName: "test3",
            subGroup: "test3",
            description: "test3",
            royalty: "test3",
            dcpm: "test3",
            taxonomyPath: "test3",
            daLineItem: "test3",
            daLineItemName: "test3",
            createdBy: "Michael",
            ReviewedBy: "Hale Steve"
        },
        {
            id: 4,
            systemId: 48,
            taxonomyId: 'Archieved',
            onBoarderId: "23/02/2023 08:00 PM",
            taxonomyName: "test4",
            subGroup: "test4",
            description: "test4",
            royalty: "test4",
            dcpm: "test4",
            taxonomyPath: "test4",
            daLineItem: "test4",
            daLineItemName: "test4",
            createdBy: "Barbara",
            ReviewedBy: "Hale Steve"
        },
        {
            id: 5,
            systemId: 47,
            taxonomyId: 'Archieved',
            onBoarderId: "23/02/2023 08:00 PM",
            taxonomyName: "test5",
            subGroup: "test5",
            description: "test5",
            royalty: "test5",
            dcpm: "test5",
            taxonomyPath: "test5",
            daLineItem: "test5",
            daLineItemName: "test5",
            createdBy: "John",
            ReviewedBy: "Hale Steve"
        },
    ];
    const columnsGrid = [
        {
            field: "systemId",
            renderHeader: () => <span className="headername">{"Taxonomy Version "}</span>,
            width: 200,
            editable: false,
        },
        {
            field: "taxonomyId",
            renderHeader: () => <span className="headername">{"Status "}</span>,
            width: 130,
            editable: true,
        },
        {
            field: "onBoarderId",
            renderHeader: () => <span className="headername">{"Completed Date Time"}</span>,
            width: 200,
            editable: true,
        },
        {
            field: "createdBy",
            renderHeader: () => <span className="headername">{"Created By"}</span>,
            width: 200,
            editable: true,
        },
        {
            field: "ReviewedBy",
            renderHeader: () => <span className="headername">{"Reviewer"}</span>,
            width: 200,
            editable: true,
        },
        {
            field: "actions",
            renderHeader: () => <span className="headername">{"Actions"}</span>,
            width: 200,
            editable: true,
        }
    ];
    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                textTransform: 'none',
                fontSize: 18,
                fontWeight: 300
            },
        },
    });
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);
    return (
        <ThemeProvider theme={theme}>

            <MDBox pt={2} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                                <MDBox>
                                    <MDTypography variant="h6" fontWeight="medium">
                                        Taxonomy Details
                                        
                                        <Button style={{marginLeft: 700}} variant="contained" component={Link} to="/taxonomy-management" endIcon={<AddIcon />}>Create New Taxonomy</Button>
                                    </MDTypography>
                                </MDBox>

                            </MDBox>
                            <MDBox>
                                <div style={{ height: 450 }}>
                                    <DataGrid
                                        rows={rowsData}
                                        columns={columnsGrid}
                                        getRowId={(row) => row.id}
                                        rowsPerPageOptions={[5, 10, 20]}
                                        pageSize={pageSize}
                                        onPageSizeChange={(newPageSize) =>
                                            setPageSize(newPageSize)
                                        }
                                        onCellEditCommit={(params) => setRowId(params.id)}
                                        getRowSpacing={(params) => ({
                                            top: params.isFirstVisible ? 0 : 5,
                                            bottom: params.isLastVisible ? 0 : 5,
                                        })}
                                        sx={{
                                            fontSize: "16px"
                                        }}

                                    /></div>

                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
        </ThemeProvider>
    );
}