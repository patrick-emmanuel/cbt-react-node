import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
} from '@material-ui/core';
import { AssessmentInfo, AssessmentQuestion } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  form: {
    padding: theme.spacing(5)
  },
  nextButton: {
    marginTop: theme.spacing(2)
  },
  inner: {
    minWidth: 1050
  },
}));

const NewAssessment = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const max = 2;

  const handleNext = (e) => {
    e.preventDefault();
    const currentPage = Math.min(page + 1, max);
    setPage(currentPage);
  }

  return (
    <div className={classes.root}>
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <form className={classes.form}>
              <AssessmentInfo page={page} />
              <AssessmentQuestion page={page} />
              {page < max && <Button
                className={classes.nextButton}
                color="primary"
                type="submit"
                variant="contained"
                margin="normal"
                onClick={handleNext}
              >
                Next
              </Button>}
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewAssessment;
