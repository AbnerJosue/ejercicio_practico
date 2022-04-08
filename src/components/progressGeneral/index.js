import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid"


const ProgressBarGeneral = () => {
    return (
        <Grid 
            container 
            direction={"column"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} md={12} xl={12}>
                <CircularProgress />
            </Grid>
        </Grid>
    )
}

export default ProgressBarGeneral;