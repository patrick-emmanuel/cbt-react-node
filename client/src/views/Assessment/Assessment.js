import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/styles';

import { GET_ASSESSMENTS } from './query';
import { UsersToolbar, AssessmentsTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Assessment = () => {
  const { loading, error, data } = useQuery(GET_ASSESSMENTS);
  const classes = useStyles();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <AssessmentsTable assessments={data.tests} />
      </div>
    </div>
  );
};

export default Assessment;
