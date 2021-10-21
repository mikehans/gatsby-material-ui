import { Grid, Typography, Link, Paper, List, ListItemText, ListItem } from '@material-ui/core'
import React from 'react'
import { Link as GatsbyLink } from "gatsby";
import Layout from '../components/Layout'

function ProjectsPage() {
    return (
        <>
            <Layout>
                <Typography variant="h1">
                    Projects
                </Typography>
                <Typography variant="h2">
                    Current Projects
                </Typography>

                <Grid container spacing={3} component="ul">
                    <Grid item xs={12} sm={6} md={4} lg={3} component="li" style={{listStyle: "none"}}>
                        <Paper elevation={12}>
                            Post 1
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component="li" style={{listStyle: "none"}}>
                        <Paper elevation={12}>
                            Post 2
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component="li" style={{listStyle: "none"}}>
                        <Paper elevation={12}>
                            Post 3
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component="li" style={{listStyle: "none"}}>
                        <Paper elevation={12}>
                            Post 4
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component="li" style={{listStyle: "none"}}>
                        <Paper elevation={12}>
                            Post 5
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component="li" style={{listStyle: "none"}}>
                        <Paper elevation={12}>
                            Post 6
                        </Paper>
                    </Grid>
                </Grid>

                <Typography variant="h2">
                    Posts again (variation)
                </Typography>

                <Grid container spacing={3} component={List}>
                    <Grid item xs={12} sm={6} md={4} lg={3} component={ListItem}>
                        <Paper elevation={6}>
                            Post 1
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component={ListItem}>
                        <Paper elevation={6}>
                            Post 2
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component={ListItem}>
                        <Paper elevation={6}>
                            Post 3
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component={ListItem}>
                        <Paper elevation={6}>
                            Post 4
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component={ListItem}>
                        <Paper elevation={6}>
                            Post 5
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} component={ListItem}>
                        <Paper elevation={6}>
                            Post 6
                        </Paper>
                    </Grid>
                </Grid>
                <Typography variant="h2">
                    More projects
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Item 1" secondary="Description of Item 1"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Item 2" secondary="Description of Item 2"/>
                    </ListItem>
                    <ListItem>
                        {/* <ListItemText primary="Item 3" secondary="Description of Item 3"/> */}
                        <Paper>Item 3 in a Paper component</Paper>
                    </ListItem>
                </List>
            </Layout>
        </>
    )
}

export default ProjectsPage
