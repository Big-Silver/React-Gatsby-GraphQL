import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}))

export default function Layout({ children }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Header open={open} drawerOpen={handleDrawerOpen} />
      <Navbar open={open} drawerClose={handleDrawerClose} />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  )
}
