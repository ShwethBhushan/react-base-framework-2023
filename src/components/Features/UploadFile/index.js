import {UploadFile} from '@mui/icons-material';
import {Box, Button, Card, Grid, Stack, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import React, {useState} from 'react';
import MDBox from '../../../genericComponents/MDBox';
import MDButton from '../../../genericComponents/MDButton';
import MDTypography from '../../../genericComponents/MDTypography';
import TaxonomyGrid from '../Datagrid/TaxonomyGrid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '52%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '70%',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const rowsData = [
  {
    id: 1,
    systemId: 51,
    taxonomyId: 'Current Active',
    onBoarderId: '23/02/2023 08:00 PM',
    taxonomyName: 'test1',
    subGroup: 'test1',
    description: 'test1',
    royalty: 'test1',
    dcpm: 'test1',
    taxonomyPath: 'test1',
    daLineItem: 'test1',
    daLineItemName: 'test1',
    createdBy: 'Barbara',
    ReviewedBy: 'Hale Steve',
  },
  {
    id: 12,
    systemId: 50,
    taxonomyId: 'Prior',
    onBoarderId: '23/02/2023 08:00 PM',
    taxonomyName: 'test2',
    subGroup: 'test2',
    description: 'test2',
    royalty: 'test2',
    dcpm: 'test2',
    taxonomyPath: 'test2',
    daLineItem: 'test2',
    daLineItemName: 'test2',
    createdBy: 'John',
    ReviewedBy: 'Hale Steve',
  },
  {
    id: 3,
    systemId: 49,
    taxonomyId: 'Archieved',
    onBoarderId: '23/02/2023 08:00 PM',
    taxonomyName: 'test3',
    subGroup: 'test3',
    description: 'test3',
    royalty: 'test3',
    dcpm: 'test3',
    taxonomyPath: 'test3',
    daLineItem: 'test3',
    daLineItemName: 'test3',
    createdBy: 'Michael',
    ReviewedBy: 'Hale Steve',
  },
  {
    id: 4,
    systemId: 48,
    taxonomyId: 'Archieved',
    onBoarderId: '23/02/2023 08:00 PM',
    taxonomyName: 'test4',
    subGroup: 'test4',
    description: 'test4',
    royalty: 'test4',
    dcpm: 'test4',
    taxonomyPath: 'test4',
    daLineItem: 'test4',
    daLineItemName: 'test4',
    createdBy: 'Barbara',
    ReviewedBy: 'Hale Steve',
  },
  {
    id: 5,
    systemId: 47,
    taxonomyId: 'Archieved',
    onBoarderId: '23/02/2023 08:00 PM',
    taxonomyName: 'test5',
    subGroup: 'test5',
    description: 'test5',
    royalty: 'test5',
    dcpm: 'test5',
    taxonomyPath: 'test5',
    daLineItem: 'test5',
    daLineItemName: 'test5',
    createdBy: 'John',
    ReviewedBy: 'Hale Steve',
  },
];
const columnsGrid = [
  {
    field: 'systemId',
    renderHeader: () => <span className="headername">{'Taxonomy Version '}</span>,
    width: 200,
    editable: false,
  },
  {
    field: 'taxonomyId',
    renderHeader: () => <span className="headername">{'Status '}</span>,
    width: 130,
    editable: true,
  },
  {
    field: 'onBoarderId',
    renderHeader: () => <span className="headername">{'Completed Date Time'}</span>,
    width: 200,
    editable: true,
  },
  {
    field: 'createdBy',
    renderHeader: () => <span className="headername">{'Created By'}</span>,
    width: 200,
    editable: true,
  },
  {
    field: 'ReviewedBy',
    renderHeader: () => <span className="headername">{'Reviewer'}</span>,
    width: 200,
    editable: true,
  },
  {
    field: 'actions',
    renderHeader: () => <span className="headername">{'Actions'}</span>,
    width: 200,
    editable: true,
  },
];
const UploadFileComponent = props => {
  const [fileInfos, setFileInfo] = useState();
  const [fileError, setFileError] = useState(false);
  const [fileSubmitted, setFileSubmitted] = useState(false);
  const handleFileUpload = event => {
    event.preventDefault();
    let file = event.target.files[0];
    let type = file.type;
    console.log('type', type);
    if (type === 'image/png' || type === 'xlsx') {
      setFileError(true);
    } else {
      setFileInfo(file.name);
      setFileError(false);
    }
  };
  return (
    <Grid container spacing={2} sx={style}>
      <Grid item xs={12}>
        <Card>
          <MDBox
            mx={2}
            mt={1}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Upload Taxonomy File
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
            <MDBox color="text" px={2}>
              <Stack direction="row" spacing={2} m={3} style={{justifyContent: 'space-around'}}>
                <Button
                  startIcon={<UploadFile color="info" />}
                  variant="outlined"
                  component="label"
                >
                  <Typography variant="h6" color={'white'}>
                    Upload File
                  </Typography>
                  <input
                    onChange={handleFileUpload}
                    hidden
                    accept=" .xls, .xlsx, .csv"
                    type="file"
                  />
                </Button>
                {fileInfos && (
                  <Typography variant="caption" color={'black'}>
                    File: {fileInfos}
                  </Typography>
                )}
                {fileError && (
                  <Typography variant="caption" color={'red'}>
                    Please Upload Excel File
                  </Typography>
                )}
                <div className="main-buttons-div justify-content-center">
                  <div className="d-flex gap-2 align-items-center">
                    <MDButton
                      onClick={() => {
                        setFileSubmitted(true);
                      }}
                      variant="gradient"
                      color="info"
                    >
                      Submit
                    </MDButton>
                    <MDButton variant="outlined" onClick={props.onCancelUpload} color="info">
                      Cancel
                    </MDButton>
                  </div>
                </div>
              </Stack>
              {fileSubmitted && (
                <div style={{height: 450}}>
                  <DataGrid
                    rows={rowsData}
                    columns={columnsGrid}
                    getRowId={row => row.id}
                    rowsPerPageOptions={[5, 10, 20]}
                    getRowSpacing={params => ({
                      top: params.isFirstVisible ? 0 : 5,
                      bottom: params.isLastVisible ? 0 : 5,
                    })}
                    sx={{
                      fontSize: '16px',
                    }}
                  />
                </div>
              )}
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UploadFileComponent;
