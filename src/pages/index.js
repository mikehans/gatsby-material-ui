import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { CssBaseline } from "@material-ui/core";
// import "@fontsource/roboto";
import HomePageBody from "../components/HomePageBody";

const IndexPage = ({data}) => {
  return (
    <>
      <Layout>
        <HomePageBody {...data.site.siteMetadata} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        author
        title
        subtitle
      }
    }
  }
`;

export default IndexPage
