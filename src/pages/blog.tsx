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

const posts = [
  {
    title: "post 1",
    body: "Here's the description",
  },
  {
    title: "post 2",
    body: "Here's the description",
  },
  {
    title: "post 3",
    body: "Here's the description",
  },
  {
    title: "post 4",
    body: "Here's the description",
  },
  {
    title: "post 5",
    body: "Here's the description",
  },
  {
    title: "post 6",
    body: "Here's the description",
  },
  {
    title: "post 7",
    body: "Here's the description",
  },
  {
    title: "post 8",
    body: "Here's the description",
  }
];

function BlogPage() {
  return (
    <>
      <Layout>
        <Typography variant="h1">Blog</Typography>
        <Typography variant="h2">Latest Posts</Typography>

        <Grid container spacing={2}>
          {posts.map((post, index) => 
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h3">{post.title}</Typography>
                  <Typography variant="body1">
                    {post.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Layout>
    </>
  );
}

export default BlogPage;
