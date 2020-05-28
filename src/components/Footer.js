import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import ProTip from "./ProTip"
import Copyright from "./Copyright"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 10px 20px",
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <Box className={classes.root} display="flex" flexDirection="column" justifyContent="center">
      <ProTip />
      <Copyright />
    </Box>
  )
}
