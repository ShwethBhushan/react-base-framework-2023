import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TaxonomyMainGrid from '../../containers/tables/data/TaxonomyMainGrid'
import { DataGrid } from '@mui/x-data-grid';
import SendIcon from '@mui/icons-material/Send';
const steps = ['Create Base Taxonomy', 'Review Base Taxonomy', 'Export', 'Summary'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  function getStepContent(step) {
    debugger;
    switch (step) {
        case 0:   
        const rows = [
                    {
                        id: 1,
                        systemId: 111,
                        taxonomyId: 11111,
                        onBoarderId: "test1",
                        taxonomyName: "test1",
                        subGroup: "test1",
                        description: "test1",
                        royalty: "test1",
                        dcpm: "test1",
                        taxonomyPath: "test1",
                        daLineItem: "test1",
                        daLineItemName: "test1",
                    },
                    {
                        id: 12,
                        systemId: 222,
                        taxonomyId: 22222,
                        onBoarderId: "test2",
                        taxonomyName: "test2",
                        subGroup: "test2",
                        description: "test2",
                        royalty: "test2",
                        dcpm: "test2",
                        taxonomyPath: "test2",
                        daLineItem: "test2",
                        daLineItemName: "test2",
                    },
                    {
                        id: 3,
                        systemId: 333,
                        taxonomyId: 33333,
                        onBoarderId: "test3",
                        taxonomyName: "test3",
                        subGroup: "test3",
                        description: "test3",
                        royalty: "test3",
                        dcpm: "test3",
                        taxonomyPath: "test3",
                        daLineItem: "test3",
                        daLineItemName: "test3",
                    },
                    {
                        id: 4,
                        systemId: 444,
                        taxonomyId: 44444,
                        onBoarderId: "test4",
                        taxonomyName: "test4",
                        subGroup: "test4",
                        description: "test4",
                        royalty: "test4",
                        dcpm: "test4",
                        taxonomyPath: "test4",
                        daLineItem: "test4",
                        daLineItemName: "test4",
                    },
                    {
                        id: 5,
                        systemId: 555,
                        taxonomyId: 55555,
                        onBoarderId: "test5",
                        taxonomyName: "test5",
                        subGroup: "test5",
                        description: "test5",
                        royalty: "test5",
                        dcpm: "test5",
                        taxonomyPath: "test5",
                        daLineItem: "test5",
                        daLineItemName: "test5",
                    },
                ];
                const handleView = (params) => {
                    console.log("Viewing ", params?.row?._id, params);
                };
                const handleEdit = (params) => {
                    console.log("Editing ", params?.row?._id, params);
                };
                const handleDelete = (params) => {
                    console.log("Deleting ", params?.row?._id, params);
                };
                const columns = [
                    {
                        field: "systemId",
                        
                        renderHeader: () => <span className="headername">{"System Id "}</span>,
                        width: 100,
                        editable: true,
                    },
                    {
                        field: "taxonomyId",
                        renderHeader: () => <span className="headername">{"Taxonomy Id "}</span>,
                        width: 100,
                        editable: true,
                    },
                    {
                        field: "onBoarderId",
                        renderHeader: () => <span className="headername">{"On Boarder Id"}</span>,
                        width: 120,
                        editable: true,
                    },
                    {
                        field: "taxonomyName",
                        renderHeader: () => <span className="headername">{"Taxonomy Name"}</span>,
                        width: 200,
                        editable: true,
                    },
                    {
                        field: "subGroup",
                        renderHeader: () => <span className="headername">{"Sub Group"}</span>,
                        width: 80,
                        editable: true,
                    },
                    {
                        field: "description",
                        renderHeader: () => <span className="headername">{"Description"}</span>,
                        width: 120,
                        editable: true,
                    },
                    {
                        field: "royalty",
                        renderHeader: () => <span className="headername">{"Royalty"}</span>,
                        width: 60,
                        editable: true,
                    },
                    {
                        field: "dcpm",
                        renderHeader: () => <span className="headername">{"DPCM"}</span>,
                        width: 60,
                        editable: true,
                    },
                    {
                        field: "taxonomyPath",
                        renderHeader: () => <span className="headername">{"Taxonomy Path"}</span>,
                        width: 150,
                        editable: true,
                    },
                    {
                        field: "daLineItem",
                        width: 90,
                        renderHeader: () => <span className="headername">{"DA LineItem"}</span>,
                        editable: true,
                    },
                    {
                        field: "daLineItemName",
                        width: 130,
                        renderHeader: () => (
                            <span className="headername">{"DA LineItem Name"}</span>
                        ),
                        editable: true,
                    },
                    {
                        field: "actions",
                        renderHeader: () => <span className="headername">{"Action"}</span>,
                        width: 80,
                        type: "actions",
                        renderCell: (params) => (
                            <>
                                
                            </>
                        ),
                    },
                ];
            return (
                <div>
                <Box sx={{ height: 400, width: '100%', marginTop: 18, marginBottom: 6, '& .super-app-theme--header': {
                    backgroundColor: 'rgb(101, 159, 246)',
                  }, boxShadow: 2,
                  border: 2,
                  borderColor: 'rgb(101, 159, 246)',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'rgb(101, 159, 246)',
                  }, }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    disableRowSelectionOnClick
                  />
                  
                </Box>
                <Button style={{marginLeft: 1580, color: 'white'}} variant="contained" endIcon={<SendIcon />}>
                Submit for Review
              </Button>
              </div>
              );
            
        break;
        case 1:   
        const reviewRows = [
                    {
                        id: 1,
                        systemId: 111,
                        taxonomyId: 11111,
                        onBoarderId: "test1",
                        taxonomyName: "test1",
                        subGroup: "test1",
                        description: "test1",
                        royalty: "test1",
                        dcpm: "test1",
                        taxonomyPath: "test1",
                        daLineItem: "test1",
                        daLineItemName: "test1",
                    },
                    {
                        id: 12,
                        systemId: 222,
                        taxonomyId: 22222,
                        onBoarderId: "test2",
                        taxonomyName: "test2",
                        subGroup: "test2",
                        description: "test2",
                        royalty: "test2",
                        dcpm: "test2",
                        taxonomyPath: "test2",
                        daLineItem: "test2",
                        daLineItemName: "test2",
                    },
                    {
                        id: 3,
                        systemId: 333,
                        taxonomyId: 33333,
                        onBoarderId: "test3",
                        taxonomyName: "test3",
                        subGroup: "test3",
                        description: "test3",
                        royalty: "test3",
                        dcpm: "test3",
                        taxonomyPath: "test3",
                        daLineItem: "test3",
                        daLineItemName: "test3",
                    },
                    {
                        id: 4,
                        systemId: 444,
                        taxonomyId: 44444,
                        onBoarderId: "test4",
                        taxonomyName: "test4",
                        subGroup: "test4",
                        description: "test4",
                        royalty: "test4",
                        dcpm: "test4",
                        taxonomyPath: "test4",
                        daLineItem: "test4",
                        daLineItemName: "test4",
                    },
                    {
                        id: 5,
                        systemId: 555,
                        taxonomyId: 55555,
                        onBoarderId: "test5",
                        taxonomyName: "test5",
                        subGroup: "test5",
                        description: "test5",
                        royalty: "test5",
                        dcpm: "test5",
                        taxonomyPath: "test5",
                        daLineItem: "test5",
                        daLineItemName: "test5",
                    },
                ];
                const reviewColumns = [
                    {
                        field: "systemId",
                        
                        renderHeader: () => <span className="headername">{"System Id "}</span>,
                        width: 100,
                        editable: true,
                    },
                    {
                        field: "taxonomyId",
                        renderHeader: () => <span className="headername">{"Taxonomy Id "}</span>,
                        width: 100,
                        editable: true,
                    },
                    {
                        field: "onBoarderId",
                        renderHeader: () => <span className="headername">{"On Boarder Id"}</span>,
                        width: 120,
                        editable: true,
                    },
                    {
                        field: "taxonomyName",
                        renderHeader: () => <span className="headername">{"Taxonomy Name"}</span>,
                        width: 200,
                        editable: true,
                    },
                    {
                        field: "subGroup",
                        renderHeader: () => <span className="headername">{"Sub Group"}</span>,
                        width: 80,
                        editable: true,
                    },
                    {
                        field: "description",
                        renderHeader: () => <span className="headername">{"Description"}</span>,
                        width: 120,
                        editable: true,
                    },
                    {
                        field: "royalty",
                        renderHeader: () => <span className="headername">{"Royalty"}</span>,
                        width: 60,
                        editable: true,
                    },
                    {
                        field: "dcpm",
                        renderHeader: () => <span className="headername">{"DPCM"}</span>,
                        width: 60,
                        editable: true,
                    },
                    {
                        field: "taxonomyPath",
                        renderHeader: () => <span className="headername">{"Taxonomy Path"}</span>,
                        width: 150,
                        editable: true,
                    },
                    {
                        field: "daLineItem",
                        width: 90,
                        renderHeader: () => <span className="headername">{"DA LineItem"}</span>,
                        editable: true,
                    },
                    {
                        field: "daLineItemName",
                        width: 130,
                        renderHeader: () => (
                            <span className="headername">{"DA LineItem Name"}</span>
                        ),
                        editable: true,
                    },
                    {
                        field: "actions",
                        renderHeader: () => <span className="headername">{"Action"}</span>,
                        width: 80,
                        type: "actions",
                        renderCell: (params) => (
                            <>
                                
                            </>
                        ),
                    },
                ];
            return (
                <div>
                <Box sx={{ height: 400, width: '100%', marginTop: 18, marginBottom: 6, '& .super-app-theme--header': {
                    backgroundColor: 'rgb(101, 159, 246)',
                  }, boxShadow: 2,
                  border: 2,
                  borderColor: 'rgb(101, 159, 246)',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'rgb(101, 159, 246)',
                  }, }}>
                  <DataGrid
                    rows={reviewRows}
                    columns={reviewColumns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    disableRowSelectionOnClick
                  />
                  
                </Box>
              </div>
              );
        case 2:   
        const exportRows = [
                    {
                        id: 1,
                        VersionNo: 53,
            Staus: 'Current Active',
                        ExportedDate: '03/01/2023',
                        ExportedDestination: 'AWS S3 Bucket'
                    },
                    {
                            id: 1,
                            VersionNo: 52,
                Staus: 'Prior',
                            ExportedDate: '02/01/2023',
                            ExportedDestination: 'AWS S3 Bucket'
                    },
                    {
                            id: 1,
                            VersionNo: 51,
                Staus: 'Archieve',
                            ExportedDate: '01/01/2023',
                            ExportedDestination: 'AWS S3 Bucket'
                    },
                    {
                            id: 1,
                            VersionNo: 50,
                Staus: 'Archieve',
                            ExportedDate: '12/01/2022',
                            ExportedDestination: 'AWS S3 Bucket'
                    },
                    {
                           id: 1,
                            VersionNo: 49,
                Staus: 'Archieve',
                            ExportedDate: '11/01/2022',
                            ExportedDestination: 'AWS S3 Bucket'
                    },
                ];
                const exportColumns = [
                    {
                        field: "VersionNo",
                        
                        renderHeader: () => <span className="headername">{"Version Number "}</span>,
                        width: 100,
                        editable: true,
                    },
                    {
                        field: "Staus",
                        renderHeader: () => <span className="headername">{"Status "}</span>,
                        width: 100,
                        editable: true,
                    },
                    {
                        field: "ExportedDate",
                        renderHeader: () => <span className="headername">{"Exported Date"}</span>,
                        width: 120,
                        editable: true,
                    },
                    {
                        field: "ExportedDestination",
                        renderHeader: () => <span className="headername">{"Destination"}</span>,
                        width: 200,
                        editable: true,
                    },
                ];
            return (
                <div>
                <Box sx={{ height: 400, width: '100%', marginTop: 18, marginBottom: 6, '& .super-app-theme--header': {
                    backgroundColor: 'rgb(101, 159, 246)',
                  }, boxShadow: 2,
                  border: 2,
                  borderColor: 'rgb(101, 159, 246)',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'rgb(101, 159, 246)',
                  }, }}>
                  <DataGrid
                    rows={exportRows}
                    columns={exportColumns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    disableRowSelectionOnClick
                  />
                  
                </Box>
              </div>
              );
        break;
        case 3:   
        <h6>Testing</h6>
        break;
        default: <div></div>
    }
  }
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <form>{getStepContent(activeStep)}</form>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Completed Status To be displayed
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}