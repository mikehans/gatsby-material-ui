import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <Box display="flex">
      <Box p={1}>
        <Typography variant="h2">
          Since the XP-38 came out, they're just not in demand.
        </Typography>
        <Typography variant="body1">
          That malfunctioning little twerp. This is all his fault! He tricked me
          into going this way, but he'll do no better.
        </Typography>
      </Box>
      <Box p={1}>
        <StaticImage
          src="../images/desert_landscape.jpg"
          alt="desert landscape"
        />
      </Box>
    </Box>
  );
}
