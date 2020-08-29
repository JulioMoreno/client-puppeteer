import React from "react";
import Form from '../form/form.component';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: "100%",
  },
}));

const MainContent = () => {
  const classes = useStyles();
  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant="h6">Publique su anuncio de forma simple</Typography>
      </div>
      <div className={classes.content}>
       <div>
           <Form />
       </div>
      </div>
    </main>
  );
};
export default MainContent;
