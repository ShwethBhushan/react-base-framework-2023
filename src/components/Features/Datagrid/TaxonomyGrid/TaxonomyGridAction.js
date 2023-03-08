import { Box, CircularProgress, Fab, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Check, Save, RemoveRedEye, Delete } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import React from "react";


const TaxonomyGridAction = ({ params, rowId,handleEdit  }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // const handleEdit = async () => {
    //     debugger;
    //     // setLoading(true);

    //     const { role, active, id } = params.row;
        
    //     // setTimeout(() => {
    //     //     setLoading(false);
    //     // }, 1500);

    // };
    const handleView = () => { 
        debugger;
    };
    const handleDelete = () => { 
        debugger;
    };
    useEffect(() => {
        if (rowId === params.id && success) setSuccess(false);
    }, [rowId]);
    return (
        <Stack direction="row" spacing={1}>
            <Box
                sx={{
                    position: "relative",
                }}
            >
                {" "}
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
                    position: "relative",
                }}
            >
                {success ? (
                    <Fab
                        color="success"
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: green[500],
                            opacity: 0.8,
                            "&:hover": { bgcolor: green[700] },
                        }}
                    >
                        <Check />
                    </Fab>
                ) : (
                    <Fab
                        color="success"
                        sx={{
                            width: 40,
                            height: 40,
                            opacity: 0.8,
                        }}
                        disabled={params.id !== rowId || loading}
                        onClick={handleEdit}
                    >
                        <Save />
                    </Fab>
                )}
                {loading && (
                    <CircularProgress
                        size={52}
                        sx={{
                            color: green[500],
                            position: "absolute",
                            top: -6,
                            left: -6,
                            zIndex: 1,
                        }}
                    />
                )}
            </Box>{" "}
            <Box
                sx={{
                    position: "relative",
                }}
            >
                {" "}
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
        </Stack>
    );
};

export default TaxonomyGridAction;
