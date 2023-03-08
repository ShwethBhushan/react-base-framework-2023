import React, {useState} from 'react';
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from '../../../../genericComponents/MDBox';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import MDTypography from '../../../../genericComponents/MDTypography';
import TaxonomyGridAction from '../../../../components/Features/Datagrid/TaxonomyGrid/TaxonomyGridAction';
import {Button} from '@mui/material';
import ImportGridAction from './gridAction';

const ImportDataGrid = ({rows, columns}) => {
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  return (
    <MDBox pt={2} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <MDBox>
              <div style={{height: 450}}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  getRowId={row => row.id}
                  rowsPerPageOptions={[5, 10, 20]}
                  pageSize={pageSize}
                  onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                  onCellEditCommit={params => setRowId(params.id)}
                  getRowSpacing={params => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                  })}
                  sx={{
                    fontSize: '11px',
                  }}
                />
              </div>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
};

export default ImportDataGrid;
