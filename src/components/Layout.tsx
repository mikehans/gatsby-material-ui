import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Header from "./Header";
import { Container, CssBaseline } from "@material-ui/core";

export default function Layout({children}) {
    return (
        <StaticQuery
            query={graphql `
                query SiteDetailsQuery {
                    site {
                        siteMetadata {
                            title
                            description
                            author
                            subtitle
                            twitter
                            linkedIn
                            github
                        }
                    }
                }`
            }
            render = {data => (
                <Container style={{marginTop:70}}>
                    <CssBaseline />
                    <Header 
                        siteTitle={data.site.siteMetadata?.title || `Title`}
                    />

                    {children}
                </Container>
            )}
        />
    )
}
