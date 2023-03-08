import React from 'react';
import {Box, CircularProgress, Fab, Stack} from '@mui/material';
import {useEffect, useState} from 'react';
import {Check, Save, RemoveRedEye, Delete, EditTwoTone} from '@mui/icons-material';
import {green} from '@mui/material/colors';
const ImportGridAction = ({type}) => {
  const handleSubmit = async () => {
    setLoading(true);

    const {role, active, id} = params.row;
    // const result = await updateStatus({ role, active }, _id, dispatch);
    // if (result) {
    //   setSuccess(true);
    //   setRowId(null);
    // }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  const handleView = () => {};
  const handleDelete = () => {};
  return (
    <Stack direction="row" spacing={1}>
      {type === 'readonly' ? (
        <>
          {' '}
          <Box
            sx={{
              position: 'relative',
            }}
          >
            {' '}
            <Fab
              color="info"
              sx={{
                width: 40,
                height: 40,
                opacity: 0.5,
              }}
              onClick={handleView}
            >
              <RemoveRedEye />
            </Fab>
          </Box>
        </>
      ) : (
        <>
          {' '}
          <Box
            sx={{
              position: 'relative',
            }}
          >
            {' '}
            <Fab
              color="info"
              sx={{
                width: 40,
                height: 40,
                opacity: 0.5,
              }}
              onClick={handleView}
            >
              <RemoveRedEye />
            </Fab>
          </Box>
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Fab
              color="success"
              sx={{
                width: 40,
                height: 40,
                opacity: 0.8,
              }}
              onClick={handleSubmit}
            >
              <EditTwoTone />
            </Fab>
          </Box>{' '}
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Fab
              color="error"
              sx={{
                width: 40,
                height: 40,
                opacity: 0.5,
              }}
              onClick={handleDelete}
            >
              <Delete />
            </Fab>
          </Box>
        </>
      )}
    </Stack>
  );
};

export default ImportGridAction;
