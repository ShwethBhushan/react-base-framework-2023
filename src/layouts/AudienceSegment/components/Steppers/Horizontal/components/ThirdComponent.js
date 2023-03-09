import {Stack} from '@mui/system';
import React, {useState} from 'react';
import {
  Button,
  Typography,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from '@mui/material';
import MDBox from '../../../../../../genericComponents/MDBox';
import MDTypography from '../../../../../../genericComponents/MDTypography';
import ImportDataGrid from '../../../DataGrid';
import ImportGridAction from '../../../DataGrid/gridAction';
import MDButton from '../../../../../../genericComponents/MDButton';
import {useNavigate} from 'react-router-dom';

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 12;
const MenuProps = {
  PaperProps: {style: {maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250}},
};

const destinations = ['S3 Bucket'];

const exportRows = [
  {
    id: 1,
    VersionNo: 53,
    Staus: 'Current Active',
    ExportedDate: '03/01/2023',
    ExportedDestination: 'AWS S3 Bucket',
  },
  {
    id: 1,
    VersionNo: 52,
    Staus: 'Prior',
    ExportedDate: '02/01/2023',
    ExportedDestination: 'AWS S3 Bucket',
  },
  {
    id: 1,
    VersionNo: 51,
    Staus: 'Archieve',
    ExportedDate: '01/01/2023',
    ExportedDestination: 'AWS S3 Bucket',
  },
  {
    id: 1,
    VersionNo: 50,
    Staus: 'Archieve',
    ExportedDate: '12/01/2022',
    ExportedDestination: 'AWS S3 Bucket',
  },
  {
    id: 1,
    VersionNo: 49,
    Staus: 'Archieve',
    ExportedDate: '11/01/2022',
    ExportedDestination: 'AWS S3 Bucket',
  },
];

const exportColumns = [
  {
    field: 'VersionNo',
    renderHeader: () => <strong className="headername">{'Version Number '}</strong>,
    width: 300,
    editable: false,
  },
  {
    field: 'Staus',
    renderHeader: () => <strong className="headername">{'Status '}</strong>,
    width: 300,
    editable: false,
  },
  {
    field: 'ExportedDate',
    renderHeader: () => <strong className="headername">{'Exported Date'}</strong>,
    width: 300,
    editable: false,
  },
  {
    field: 'ExportedDestination',
    renderHeader: () => <strong className="headername">{'Destination'}</strong>,
    width: 250,
    editable: false,
  },
];

const ThirdComponent = () => {
  const [destination, setDestination] = useState('');
  const handleChange = event => {
    setDestination(event.target.value);
  };

  return (
    <Stack>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h4" gutterBottom>
            Export
          </MDTypography>
        </MDBox>
      </MDBox>
      <Stack direction={'row'} spacing={6}>
        {' '}
        <MDBox px={2}>
          {' '}
          <FormControl sx={{width: 200}}>
            <InputLabel id="demo-multiple-name-label">Destinations*</InputLabel>{' '}
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={destination}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              style={{padding: 12}}
            >
              {destinations.map(item => (
                <MenuItem key={item} value={item}>
                  {item}{' '}
                </MenuItem>
              ))}{' '}
            </Select>{' '}
          </FormControl>{' '}
        </MDBox>{' '}
        <MDButton variant="gradient" color="info">
          Export
        </MDButton>
      </Stack>
      <MDBox color="text" px={2}>
        <ImportDataGrid rows={exportRows} columns={exportColumns} selectedRows={true} />
      </MDBox>
    </Stack>
  );
};

export default ThirdComponent;
