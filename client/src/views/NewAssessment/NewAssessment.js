import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const NewAssessment = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        Yo!
      </div>
    </div>
  );
};

export default NewAssessment;
