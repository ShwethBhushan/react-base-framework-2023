import {Button, Card, ListItem, Typography} from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import MDBox from '../../../../../genericComponents/MDBox';
import MDButton from '../../../../../genericComponents/MDButton';
import MDTypography from '../../../../../genericComponents/MDTypography';
import VerticleStepper from '../Verticle';
import {FileCopy, UploadFile} from '@mui/icons-material';
import './styles.css';
import TaxonomyGrid from '../../../../../components/Features/Datagrid/TaxonomyGrid';
import ImportDataGrid from '../../DataGrid';

import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FinalComponent from './components/FinalComponent';
const labelArrayStep1 = [
    'Update/Resume Taxonomy',
    'Import New Audiences',
    'Validations',
    'Progress',
    'Preview & Submit',
];
const labelArrayStep2 = [
    'View Updated Taxonomy',
    'View the Changes Only',
    'Approve/Reject ',
    'Preview ',
]; const labelArrayStep3 = [
    ' Push to destination',
    'Preview ',
];
const firstComponent = () => {
    return (
        <Stack sx={{ width: '100%' }}>
            <VerticleStepper key='first' labelArray={labelArrayStep1} initialStep={1} />
        </Stack>
    );
};
const secondComponent = () => {
    return <Stack sx={{ width: '100%' }}>
        <VerticleStepper key='second' labelArray={labelArrayStep2} initialStep={1} />
    </Stack>;
};
const thirdComponent = () => {
    return <Stack sx={{ width: '100%' }}>
        <VerticleStepper key='third' labelArray={labelArrayStep3} initialStep={1} />
    </Stack>;
};
const finalComponent = () => {
  return <div>Final Component</div>;
};
const HorizontalStepper2 = () => {
  const [steps, setSteps] = useState([
    {
      key: 'firstStep',
      label: 'Create Base Taxonomy',
      isDone: true,
      component: <FirstComponent key={'firstStep'} />,
    },
    {
      key: 'secondStep',
      label: 'Review Base Taxonomy',
      isDone: false,
      component: <SecondComponent key={'secondStep'} />,
    },
    {
      key: 'thirdStep',
      label: 'Export',
      isDone: false,
      component: <ThirdComponent key={'thirdStep'} />,
    },
    {
      key: 'finalStep',
      label: 'Summary',
      isDone: false,
      component: <FinalComponent key={'finalStep'} />,
    },
  ]);
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep =>
      prevStep.map(x => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep =>
      prevStep.map(x => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };
  return (
    <div className="box">
      <div className="steps">
        <ul className="nav">
          {steps.map((step, i) => {
            return (
              <li
                key={i}
                className={`${activeStep.key === step.key ? 'active' : ''} ${
                  step.isDone ? 'done' : ''
                }`}
              >
                <div>
                  Step {i + 1}
                  <br />
                  <span>{step.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>{activeStep.component}</div>
      <div className="btn-component">
        <MDButton
          color="dark"
          variant="gradient"
          onClick={handleBack}
          disabled={steps[0].key === activeStep.key}
        >
          {activeStep.key === 'secondStep' ? 'Send Back for Revision' : 'Back'}
        </MDButton>

        <MDButton color="dark" variant="gradient" onClick={handleNext}>
          {steps[steps.length - 1].key !== activeStep.key
            ? activeStep.key != 'firstStep'
              ? activeStep.key === 'secondStep'
                ? 'Approve'
                : 'Next'
              : ' Submit for Reviews'
            : 'Submit'}
        </MDButton>
      </div>
    </div>
  );
};

export default HorizontalStepper2;
