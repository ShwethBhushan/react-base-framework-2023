import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import MDBox from '../../../../../genericComponents/MDBox';

import './styles.css';


const VerticleStepper = ({ labelArray, initialStep }) => {
    console.log('labelArray', labelArray)
    console.log('currentStep', currentStep)

    const [currentStep, updateCurrentStep] = useState(initialStep);

    function updateStep(step) {
        console.log('step', step)
        updateCurrentStep(step);
    }
    function Step({ selected, updateStep, index, label }) {
        return (
            <div className={'stepBlock' + (selected ? ' selected' : '')}>
                <div className="circleWrapper" onClick={() => updateStep(index + 1)}>
                    <div className="circle">{index + 1}</div>
                </div>
                <span className="step-label">{label}</span>
            </div>
        );
    }
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={3} sx={{ borderRight: '1px solid lightgray', paddingLeft: '10px' }}>
                    <div className="stepWrapper">
                        {labelArray.map((item, index) => (
                            <Step
                                key={index}
                                index={index}
                                label={item}
                                updateStep={updateStep}
                                selected={currentStep === index + 1}
                            ></Step>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <MDBox >
                        {' '}
                        <p> Step {currentStep} : {labelArray[currentStep - 1]}</p>
                        <div style={{ maxHeight: "100%" }}>Container</div>
                    </MDBox>
                    <div className='bottom-links'>
                        {' '}
                        <button
                            className="primaryButton"
                            disabled={currentStep === 1}
                            onClick={() => updateStep(currentStep - 1)}
                        >
                            Previous Step
                        </button>
                        <button
                            className="primaryButton"
                            disabled={currentStep === labelArray.length}
                            onClick={() => updateStep(currentStep + 1)}
                        >
                            Next Step
                        </button>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default VerticleStepper;
