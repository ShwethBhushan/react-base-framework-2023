import React from 'react';
import PropTypes from 'prop-types';
import DashboardLayout from '../../../layouts/DashboardLayout';
import MDBox from '../../../genericComponents/MDBox';
import { makeStyles } from '@mui/styles';
import {Step, StepLabel, Stepper} from '@mui/material';

const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
  });

  const StepperIconComponent = props => {

    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
         1: <SettingsIcon />,
         2: <GroupAddIcon />,
         3: <VideoLabelIcon />,
    };
    return (
            <div  className="">
                {icons[String(props.icon)]}
            </div>
    );
};

StepperIconComponent.propTypes = {
    
};

  
  const BaseTaxonomy = props => {
    const steps = () => {
        return ['Create Base Taxonomy', 'Validate Audience', 'Preview & Submit'];
    }
    return (
        <DashboardLayout>
            <MDBox>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                 </Step>
                 ))}
             </Stepper>
             </MDBox>
         </DashboardLayout>
    );
  };
  
  BaseTaxonomy.propTypes = {
    
  };
  
  export default BaseTaxonomy;

