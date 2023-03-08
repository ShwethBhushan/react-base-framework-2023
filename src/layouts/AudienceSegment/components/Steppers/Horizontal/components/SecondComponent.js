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
  {field: 'col1', headerName: 'System ID', width: 80},
  {field: 'col2', headerName: 'Onboarder Id', width: 80},
  {field: 'col3', headerName: 'Taxonomy Id', width: 100},
  {field: 'col4', headerName: 'Taxonomy Name', width: 200},
  {field: 'col5', headerName: 'Sub Group', width: 70},
  {field: 'col6', headerName: 'Description', width: 160},
  {field: 'col7', headerName: 'Royalty', width: 70},
  {field: 'col8', headerName: 'DPCM', width: 70},
  {field: 'col9', headerName: 'Taxonomy Path', width: 160},
  {
    headerName: 'Actions',
    width: 160,
    renderCell: () => <ImportGridAction type="readonly" />,
  },
];
const SecondComponent = () => {
  const [fileError, setfileError] = useState(false);
  const [selectedFile, setselectedFile] = useState();
  const handleFileUpload = event => {
    event.preventDefault();
    const {files} = event.target;

    if (!files) return;
    if (new RegExp('image/*').test(files[0].type)) {
      setselectedFile(files[0].name);
      setfileError(false);
    } else {
      setfileError(true);
    }
  };
  return (
    <Stack>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h4" gutterBottom>
            Create Base Taxonomy
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>30 done</strong> this month
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
            {selectedFile && (
              <Typography variant="caption" color={'black'}>
                File: {selectedFile}
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

export default SecondComponent;
