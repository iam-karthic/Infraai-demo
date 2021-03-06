/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Map from '../../../components/Map/Map';
import './ProjectMap.scss';
import { visionMapRoutes } from '../../../constants/Constants';
import { useNavigate } from 'react-router-dom';

export default function ProjectMap() {
  const position = [51.505, -0.09];
  const navigate = useNavigate();

  return (
    <Grid
      className="visionMap"
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={0.5}
      alignContent="flex-start">
      <Grid className="visionMap__header">
        <Grid >
          <Typography variant="h5" component="div" className="card__heading-vision-projectmap">
            PROJECT MAP
          </Typography>
        </Grid>
        <Grid onClick={() => navigate('/intel/id')} >
          <Button variant="outlined" className="projectmap__btn-overview">
            Return To Overview
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <Map popUpRoutes={visionMapRoutes} style={{ height: '75vh' }} />
      </Grid>
    </Grid>
  );
}
