import React from 'react';
import {Box, Button} from '@mui/material';
import {Container} from '@mui/system';

function ButtonStepper({steps, activeStep, onClick, onClickBack, loading}) {
  const isLastStep = activeStep === steps.length;

  return (
    <Container>
      <Box
        sx={{
          p: 2,
          background: 'white',
          zIndex: 100,
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: 'white',
        }}
      >
        {activeStep > 1 && (
          <Button type="button" color="info" variant="contained" fullWidth onClick={onClickBack}>
            {activeStep === 2 ? 'Send Back for Revision' : 'Back'}
          </Button>
        )}
        <Button type="submit" color="info" variant="contained" fullWidth onClick={onClick}>
          {isLastStep
            ? 'Submit'
            : activeStep === 1
            ? 'Submit for Reviews'
            : activeStep === 2
            ? 'Approve'
            : 'Next'}
        </Button>
      </Box>
    </Container>
  );
}

export default ButtonStepper;
