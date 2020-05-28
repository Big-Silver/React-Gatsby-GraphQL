import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Layout from "../components/Layout"
import RepositoryList from "../components/RepositoryList"

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default function Index({ data }) {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Box my={4}>
            <RepositoryList repositories={data.repo.repositories} />
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    repo {
      id
      repositories {
        name
        description
        stargazers_count
        watchers_count
        language
        forks_count
        open_issues_count
        default_branch
      }
    }
  }
`
