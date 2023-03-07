import React, { useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "../../../genericComponents/MDBox";
import MDTypography from "../../../genericComponents//MDTypography";
import TaxonomyGridAction from '../../../components/Features/Datagrid/TaxonomyGrid/TaxonomyGridAction';
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
export default function TaxonomyMainGrid() {
    const rowsData = [
        {
            id: 1,
            systemId: 111,
            taxonomyId: 11111,
            onBoarderId: "test1",
            taxonomyName: "test1",
            subGroup: "test1",
            description: "test1",
            royalty: "test1",
            dcpm: "test1",
            taxonomyPath: "test1",
            daLineItem: "test1",
            daLineItemName: "test1",
        },
        {
            id: 12,
            systemId: 222,
            taxonomyId: 22222,
            onBoarderId: "test2",
            taxonomyName: "test2",
            subGroup: "test2",
            description: "test2",
            royalty: "test2",
            dcpm: "test2",
            taxonomyPath: "test2",
            daLineItem: "test2",
            daLineItemName: "test2",
        },
        {
            id: 3,
            systemId: 333,
            taxonomyId: 33333,
            onBoarderId: "test3",
            taxonomyName: "test3",
            subGroup: "test3",
            description: "test3",
            royalty: "test3",
            dcpm: "test3",
            taxonomyPath: "test3",
            daLineItem: "test3",
            daLineItemName: "test3",
        },
        {
            id: 4,
            systemId: 444,
            taxonomyId: 44444,
            onBoarderId: "test4",
            taxonomyName: "test4",
            subGroup: "test4",
            description: "test4",
            royalty: "test4",
            dcpm: "test4",
            taxonomyPath: "test4",
            daLineItem: "test4",
            daLineItemName: "test4",
        },
        {
            id: 5,
            systemId: 555,
            taxonomyId: 55555,
            onBoarderId: "test5",
            taxonomyName: "test5",
            subGroup: "test5",
            description: "test5",
            royalty: "test5",
            dcpm: "test5",
            taxonomyPath: "test5",
            daLineItem: "test5",
            daLineItemName: "test5",
        },
    ];
    const handleView = (params) => {
        console.log("Viewing ", params?.row?._id, params);
    };
    const handleEdit = (params) => {
        console.log("Editing ", params?.row?._id, params);
    };
    const handleDelete = (params) => {
        console.log("Deleting ", params?.row?._id, params);
    };
    const columnsGrid = [
        {
            field: "systemId",
            renderHeader: () => <span className="headername">{"System Id "}</span>,
            width: 80,
            editable: true,
        },
        {
            field: "taxonomyId",
            renderHeader: () => <span className="headername">{"Taxonomy Id "}</span>,
            width: 90,
            editable: true,
        },
        {
            field: "onBoarderId",
            renderHeader: () => <span className="headername">{"On Boarder Id"}</span>,
            width: 95,
            editable: true,
        },
        {
            field: "taxonomyName",
            renderHeader: () => <span className="headername">{"Taxonomy Name"}</span>,
            width: 200,
            editable: true,
        },
        {
            field: "subGroup",
            renderHeader: () => <span className="headername">{"Sub Group"}</span>,
            width: 80,
            editable: true,
        },
        {
            field: "description",
            renderHeader: () => <span className="headername">{"Description"}</span>,
            width: 80,
            editable: true,
        },
        {
            field: "royalty",
            renderHeader: () => <span className="headername">{"Royalty"}</span>,
            width: 80,
            editable: true,
        },
        {
            field: "dcpm",
            renderHeader: () => <span className="headername">{"DCPM"}</span>,
            width: 60,
            editable: true,
        },
        {
            field: "taxonomyPath",
            renderHeader: () => <span className="headername">{"Taxonomy Path"}</span>,
            width: 180,
            editable: true,
        },
        {
            field: "daLineItem",
            width: 90,
            renderHeader: () => <span className="headername">{"DA LineItem"}</span>,
            editable: true,
        },
        {
            field: "daLineItemName",
            width: 130,
            renderHeader: () => (
                <span className="headername">{"DA LineItem Name"}</span>
            ),
            editable: true,
        },
        {
            field: "actions",
            renderHeader: () => <span className="headername">{"Action"}</span>,
            width: 140,
            type: "actions",
            renderCell: (params) => (
                <>
                    <TaxonomyGridAction {...{ params, rowId }} />
                </>
            ),
        },
    ];
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);
    return (
        <MDBox pb={3}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <MDBox mt={-16}>
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
                                        fontSize: "11px"
                                    }}
                                /></div>
                        </MDBox>
                    </Card>
                </Grid>
            </Grid>
        </MDBox>
    );
}
