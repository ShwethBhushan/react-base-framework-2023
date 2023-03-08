import {UploadFile} from '@mui/icons-material';
import {Button, Typography} from '@mui/material';
import {Stack} from '@mui/system';
import React, {useState} from 'react';
import MDBox from '../../../../../../genericComponents/MDBox';
import MDTypography from '../../../../../../genericComponents/MDTypography';
import ImportDataGrid from '../../../DataGrid';
import ImportGridAction from '../../../DataGrid/gridAction';
const rows = [
  {
    id: 1,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 2,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 3,
    col1: '11717',
    col2: 'P11717_H',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 4,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 5,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 6,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 7,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 8,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 9,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
  {
    id: 10,
    col1: '11716',
    col2: 'P11717_G',
    col3: '1171800',
    col4: 'BaseTest',
    col5: 'G',
    col6: 'MockDesc',
    col7: 'Y',
    col8: '1.66',
    col9: 'Folder1>Folder2<Folder3',
    col10: '',
  },
];
const columns = [
  {field: 'col1', headerName: 'System ID', width: 120},
  {field: 'col2', headerName: 'Onboarder Id', width: 120},
  {field: 'col3', headerName: 'Taxonomy Id', width: 120},
  {field: 'col4', headerName: 'Taxonomy Name', width: 300},
  {field: 'col5', headerName: 'Sub Group', width: 120, editable: true},
  {field: 'col6', headerName: 'Description', width: 220, editable: true},
  {field: 'col7', headerName: 'Royalty', width: 140, editable: true},
  {field: 'col8', headerName: 'DPCM', width: 140, editable: true},
  {field: 'col9', headerName: 'Taxonomy Path', width: 300, editable: true},
  {
    headerName: 'Actions',
    width: 160,
    renderCell: () => <ImportGridAction type={'readwrite'} />,
  },
];

const FirstComponent = () => {
  const [fileInfos, setFileInfo] = useState();
  const [fileError, setFileError] = useState(false);
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
  console.log('fileInfos', fileInfos);
  return (
    <Stack>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h4" gutterBottom>
            
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDTypography variant="button" fontWeight="regular" color="text">
             
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Stack direction="column" spacing={2}>
            <Button startIcon={<UploadFile color="info" />} variant="outlined" component="label">
              <Typography variant="h6" color={'white'}>
                Upload File
              </Typography>
              <input onChange={handleFileUpload} hidden accept=" .xls, .xlsx, .csv" type="file" />
            </Button>
            {fileInfos && (
              <Typography variant="caption" color={'black'}>
                File: {fileInfos}
              </Typography>
            )}
          </Stack>
          {fileError && (
            <Typography variant="caption" color={'red'}>
              Please Upload Excel File
            </Typography>
          )}
        </MDBox>
      </MDBox>
      <MDBox>
        <ImportDataGrid rows={rows} columns={columns} />
      </MDBox>
    </Stack>
  );
};

export default FirstComponent;
