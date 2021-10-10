import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

function BlogPage() {
  return (
    <>
      <Layout>
        <Typography variant="h1">Blog</Typography>
        <Typography variant="h2">Latest Posts</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h3">Post 1</Typography>
                <Typography variant="body1">
                  Here's the description of the post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h3">Post 2</Typography>
                <Typography variant="body1">
                  Here's the description of the post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h3">Post 3</Typography>
                <Typography variant="body1">
                  Here's the description of the post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h3">Post 4</Typography>
                <Typography variant="body1">
                  Here's the description of the post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h3">Post 5</Typography>
                <Typography variant="body1">
                  Here's the description of the post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h3">Post 6</Typography>
                <Typography variant="body1">
                  Here's the description of the post.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default BlogPage;
