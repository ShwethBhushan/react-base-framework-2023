import {UploadFile} from '@mui/icons-material';
import {
  Button,
  Dialog,
  Modal,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from '@mui/material';
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

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 12;
const MenuProps = {
  PaperProps: {style: {maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250}},
};
const versionNumbersData = ['Version#52', 'Version#51', 'Version#50'];
const taxonomyStatusData = ['Next Active', 'Current Active', 'Prior', 'Achieve'];

const columns = [
  {field: 'col1', headerName: 'System ID', width: 120},
  {field: 'col2', headerName: 'Onboarder Id', width: 120},
  {field: 'col3', headerName: 'Taxonomy Id', width: 120},
  {field: 'col4', headerName: 'Taxonomy Name', width: 300},
  {field: 'col5', headerName: 'Sub Group', width: 120, editable: false},
  {field: 'col6', headerName: 'Description', width: 220, editable: false},
  {field: 'col7', headerName: 'Royalty', width: 140, editable: false},
  {field: 'col8', headerName: 'DPCM', width: 140, editable: false},
  {field: 'col9', headerName: 'Taxonomy Path', width: 300, editable: false},
  {
    headerName: 'Actions',
    width: 160,
    renderCell: () => <ImportGridAction type="readonly" />,
  },
];
const SecondComponent = () => {
  const [versionNumber, setVersionNumber] = useState('');
  const [taxonomyStatus, setTaxonomyStatus] = useState('');
  const handleChange = event => {
    setVersionNumber(event.target.value);
  };
  const handleChangeTaxonomy = event => {
    console.log('event', event);
    setTaxonomyStatus(event.target.value);
  };
  return (
    <Stack>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        {' '}
        <Stack direction={'row'} spacing={3}>
          {' '}
          <MDBox>
            {' '}
            <FormControl sx={{width: 200}}>
              <InputLabel id="demo-multiple-name-label">Version Number</InputLabel>{' '}
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={versionNumber}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                style={{padding: 12}}
              >
                {versionNumbersData.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}{' '}
                  </MenuItem>
                ))}{' '}
              </Select>{' '}
            </FormControl>{' '}
          </MDBox>{' '}
          <MDBox>
            {' '}
            <FormControl sx={{width: 200}}>
              <InputLabel id="taxonomyStatus-label">Taxonomy Status</InputLabel>{' '}
              <Select
                labelId="taxonomyStatus-label"
                id="taxonomyStatus"
                value={taxonomyStatus}
                onChange={handleChangeTaxonomy}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                style={{padding: 12}}
              >
                {' '}
                {taxonomyStatusData.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}{' '}
                  </MenuItem>
                ))}{' '}
              </Select>{' '}
            </FormControl>{' '}
          </MDBox>{' '}
        </Stack>{' '}
      </MDBox>
      <MDBox>
        <ImportDataGrid rows={rows} columns={columns} isCheckbox={true} />
      </MDBox>
    </Stack>
  );
};

export default SecondComponent;
