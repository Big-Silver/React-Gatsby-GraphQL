import React from "react"
import Box from "@material-ui/core/Box"
import ProTip from "./ProTip"
import Copyright from "./Copyright"

export default function Footer() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <ProTip />
      <Copyright />
    </Box>
  )
}
