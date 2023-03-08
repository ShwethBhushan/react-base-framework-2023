import React from 'react';
import PropTypes from 'prop-types';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MDBox from '../../../genericComponents/MDBox';
import MDInput from '../../../genericComponents/MDInput';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Card from "@mui/material/Card";
import DashboardNavbar from '../../../layouts/Navbars/DashboardNavbar';
import MDTypography from "../../../genericComponents/MDTypography";
import { FormControl,InputLabel,Select,OutlinedInput,MenuItem } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import MDButton from '../../../genericComponents/MDButton';

 const getStyles=(name, item, theme) => {
    return {
      fontWeight:
        item.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
         },
    },
 };

 const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    p: 0,
  };

const AudienceMaitanance = props => {
    const subGroups = [ 'A', 'B', 'C', 'D', 'G']
    const royalities = ['None', 'Yes', 'No']

    const theme = useTheme();

    const [subGroup, setSubGroup] = React.useState("")
    const [royality, setRoyality] = React.useState("")

    const subGroupChange = (event)=> {
        const {
            target: { value },
          } = event;
          setSubGroup(value);
    }

    const royalityChange = (event)=> {
        const {
            target: { value },
          } = event;
          setRoyality(value);
    }

    return (
  
        <Grid container spacing={6} sx={style}  >
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
                    Audience Segment Maitanance
                    </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                        <div className='d-flex flex-column gap-2 w-100 max-400'>
                                <MDInput type="text" label="System ID" value="11716" disabled />
                                <MDInput type="text" label="Onboarder ID" value="P11717_G"  disabled/>
                                <MDInput type="text" label="Taxonomy ID" value="1171800" disabled/>
                                <MDInput type="text" label="Taxonomy Name" value="BaseTest" />
                              
                                <FormControl sx={{width: 400 }}>
                                    <InputLabel id="demo-multiple-name-label">Sub Group*</InputLabel>
                                         <Select
                                              labelId="demo-multiple-name-label"
                                              id="demo-multiple-name"
                                              value={subGroup}
                                              onChange={subGroupChange}
                                              input={<OutlinedInput label="Name" />}
                                              MenuProps={MenuProps}
                                              style={{padding:12}}
                                        >
                                                {subGroups.map((item) => (
                                                    <MenuItem
                                                      key={item}
                                                      value={item}
                                                      style={getStyles(item, subGroup, theme)}
                                                    >
                                                      {item}
                                                    </MenuItem>
                                                ))}
                                         </Select>
                                </FormControl>
                                <MDInput type="text" label="Description*" value="Mock Description" />
                               
                                <FormControl sx={{ width: 400 }}>
                                    <InputLabel id="demo-multiple-name-label">Royality*</InputLabel>
                                         <Select
                                              labelId="demo-multiple-name-label"
                                              id="demo-multiple-name"
                                              value={royality}
                                              onChange={royalityChange}
                                              input={<OutlinedInput label="Name" />}
                                              MenuProps={MenuProps}
                                              style={{padding:12}}
                                        >
                                                {royalities.map((item) => (
                                                    <MenuItem
                                                      key={item}
                                                      value={item}
                                                      style={getStyles(item, item, theme)}
                                                    >
                                                      {item}
                                                    </MenuItem>
                                                ))}
                                         </Select>
                                </FormControl>

                                <MDInput type="text" label="DPCM" value="1.66" />
                                <MDInput type="text" label="Taxonomy Path" value="Folder1>Folder2<Folder3" />
                                <MDInput type="text" label="Change Notes*" value="" />
                               
                        </div>
                        <div className='main-buttons-div justify-content-center'>
                            <div className='d-flex gap-2 align-items-center'>
                                <MDButton variant="gradient" color="info">Submit</MDButton>
                                <MDButton variant="outlined" onClick={props.onCancel} color="info">Cancel</MDButton>
                            </div>
                        </div>
                </MDBox>
            </Card>
        </Grid>
        </Grid>
        
    );
};

AudienceMaitanance.propTypes = {
    
};

export default AudienceMaitanance;