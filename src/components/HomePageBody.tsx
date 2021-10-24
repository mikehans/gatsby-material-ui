import { Box, Grid, Paper, Typography, Button, Link } from "@material-ui/core";
import { StayPrimaryLandscape } from "@material-ui/icons";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import Hero from "./Hero";
import HeroBox from "./HeroBox";

function HomePageBody(data) {
  const { title, subtitle } = data;

  return (
    <>
      <Box
        component="div"
        m={1}
        sx={{ marginTop: 70, marginLeft: 0, bgcolor: "secondary.main" }}
      >
        <Typography variant="h1">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>

      <Hero />
      <HeroBox />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            No, my father didn't fight in the wars. He was a navigator on a
            spice freighter.
            <Link to="/about" component={GatsbyLink}>
              Link Learn more
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper>
            Read my blog
            <Link to="/blog" component={GatsbyLink}>
              Link Learn more
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <Paper>
            Tech projects
            <Link to="/projects" component={GatsbyLink}>
              Link Learn more
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper>
            Other stuff
            <Link to="/other-interests" component={GatsbyLink}>
              Link Learn more
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePageBody;
