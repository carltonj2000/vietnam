import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Layout from "./Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(3),
    padding: theme.spacing(1),
    alignItems: "center",
    color: "#ff0",
    background: "rgba(85,26,139,1)",
  },
}));

function Videos(props) {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Vietnam North To South</Typography>
          <iframe
            width="480"
            height="315"
            title="Vietnam North To South"
            src="https://www.youtube.com/embed/Z3CMb2qenog"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h6">Hue Motorcycling</Typography>
          <iframe
            width="480"
            height="315"
            title="Hue Motorcycling"
            src="https://www.youtube.com/embed/DF3o9nidGNA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Paper>
      </div>
    </Layout>
  );
}

export default Videos;
