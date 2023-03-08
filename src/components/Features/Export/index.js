import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/system';


const Export = props => {
    return (
        <div>
             <Box sx={{ height: 400, width: '100%', marginTop: 18, marginBottom: 6, 
                '& .super-app-theme--header': {
                      backgroundColor: 'rgb(101, 159, 246)',
                 },
                 boxShadow: 2, 
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
            disableRowSelectionOnClick /> 
         </Box> 
        </div>
       );
};

Export.propTypes = {
    
};

export default Export;