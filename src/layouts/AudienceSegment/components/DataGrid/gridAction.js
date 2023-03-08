import React from 'react';
import {Box, CircularProgress, Fab, Stack,IconButton} from '@mui/material';
import {useEffect, useState} from 'react';
import {Check, Save, RemoveRedEye, Delete, EditTwoTone} from '@mui/icons-material';
import {green} from '@mui/material/colors';
const ImportGridAction = ({type, handleSubmit, handleDelete, handleView}) => {
  // const handleSubmit = async () => {
  //   setLoading(true);

  //   const {role, active, id} = params.row;
  //   // const result = await updateStatus({ role, active }, _id, dispatch);
  //   // if (result) {
  //   //   setSuccess(true);
  //   //   setRowId(null);
  //   // }
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // };
  // const handleView = () => {};
  // const handleDelete = () => {};
  return (
    <Stack direction="row">
      {' '}
      {type === 'readonly' ? (
        <>
          {' '}
          <IconButton aria-label="delete" onClick={handleView}>
            <RemoveRedEye />{' '}
          </IconButton>{' '}
           {' '}
        </>
      ) : (
        <>
          {' '}
          <IconButton aria-label="delete" onClick={handleView}>
            <RemoveRedEye />{' '}
          </IconButton>
          <IconButton aria-label="delete" onClick={handleSubmit}>
            <EditTwoTone />{' '}
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDelete}>
            {' '}
            <Delete />{' '}
          </IconButton>{' '}
           {' '}
        </>
      )}{' '}
    </Stack>
  );
};

export default ImportGridAction;
