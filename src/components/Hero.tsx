import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} alignContent={{xs: "center", lg: "space-around"}}>
        <Typography variant="h2">
          Since the XP-38 came out, they're just not in demand.
        </Typography>
        <Typography variant="body1">
          That malfunctioning little twerp. This is all his fault! He tricked me
          into going this way, but he'll do no better.
        </Typography>
      </Grid>
      <Grid item md={6}>
        <StaticImage src="../images/desert_landscape.jpg" alt="desert landscape" />
      </Grid>
    </Grid>
  );
}
