import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import StarIcon from "@material-ui/icons/Star"
import CallMergeIcon from "@material-ui/icons/CallMerge"
import BuildIcon from "@material-ui/icons/Build"
import VisibilityIcon from "@material-ui/icons/Visibility"
import BugReportIcon from "@material-ui/icons/BugReport"
import FolderIcon from "@material-ui/icons/Folder"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "./Link"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  description: {
    margin: "10px 0",
    fontSize: 14,
  },
})

const RepositoryList = ({ repositories }) => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {console.log(repositories)}
        {repositories.map((repo, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card} key={i}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {repo.name}
                </Typography>
                <Typography
                  className={classes.description}
                  color="textSecondary"
                  gutterBottom
                >
                  {repo.description}
                </Typography>
                <Box display="flex" flexDirection="row" spacing={3}>
                  <Typography variant="body2" component="p">
                    <IconButton color="inherit">
                      <StarIcon color="primary"></StarIcon>
                    </IconButton>
                    {repo.stargazers_count}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <IconButton color="inherit">
                      <CallMergeIcon color="primary"></CallMergeIcon>
                    </IconButton>
                    {repo.forks_count}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <IconButton color="inherit">
                      <BuildIcon color="primary"></BuildIcon>
                    </IconButton>
                    {repo.language}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" spacing={3}>
                  <Typography variant="body2" component="p">
                    <IconButton color="inherit">
                      <VisibilityIcon color="primary"></VisibilityIcon>
                    </IconButton>
                    {repo.watchers_count}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <IconButton color="inherit">
                      <BugReportIcon color="primary"></BugReportIcon>
                    </IconButton>
                    {repo.open_issues_count}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <IconButton color="inherit">
                      <FolderIcon color="primary"></FolderIcon>
                    </IconButton>
                    {repo.default_branch}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <a href={`https://github.com/debtcollective/${repo.name}`} target="blank">
                    <ListItemText primary="Learn More" />
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default RepositoryList
