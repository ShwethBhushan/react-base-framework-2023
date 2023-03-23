import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import BaseStepper from './components/BaseStepper';
import ButtonStepper from './components/ButtonStepper';
import {Divider} from '@mui/material';
import FirstComponent from '../../layouts/AudienceSegment/components/Steppers/Horizontal/components/FirstComponent';
import SecondComponent from '../../layouts/AudienceSegment/components/Steppers/Horizontal/components/SecondComponent';
import ThirdComponent from '../../layouts/AudienceSegment/components/Steppers/Horizontal/components/ThirdComponent';
import FinalComponent from '../../layouts/AudienceSegment/components/Steppers/Horizontal/components/FinalComponent';

const steps = ['Create Base Taxonomy', 'Review Base Taxonomy', 'Export', 'Summary'];
function _renderStepContent(step) {
  switch (step) {
    case 1:
      return <FirstComponent />;
    case 2:
      return <SecondComponent />;
    case 3:
      return <ThirdComponent />;
    case 4:
      return <h4>Final Step</h4>;
    default:
      return <FirstComponent />;
  }
}
export default function StepperUi() {
  const [activeStep, setActiveStep] = useState(1);
  const isLastStep = activeStep === steps.length;

  function _handleSubmit() {
    if (isLastStep) {
      return alert('Last Step');
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  }

  function _handleBack() {
    if (activeStep === 1) {
      return;
    }
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      <Box pt={2}>
        <BaseStepper activeStep={activeStep} steps={steps} />
        <Divider sx={{mt: 2}} />
        <Box p={2}>
          <div>
            {_renderStepContent(activeStep)}
            <ButtonStepper
              onClick={_handleSubmit}
              steps={steps}
              activeStep={activeStep}
              onClickBack={_handleBack}
            />
          </div>
        </Box>
      </Box>
    </>
  );
}
