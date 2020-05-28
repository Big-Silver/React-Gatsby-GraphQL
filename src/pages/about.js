import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Layout from "../components/Layout"

const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
}))

export default function About() {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby GraphQL example
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}
