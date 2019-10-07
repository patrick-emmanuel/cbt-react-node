import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Grid
} from '@material-ui/core';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  QuestionStat,
} from './components';
import { GET_ASSESSMENT } from './query';
import { DELETE_ASSESSMENT } from './mutation';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const AssessmentDetail = ({ match, history }) => {

  const classes = useStyles();

  const [deleteAssessment, {
    data: deleteAssesmentData,
    loading: deletingAssessment }
  ] = useMutation(DELETE_ASSESSMENT);

  const { loading, error, data } = useQuery(GET_ASSESSMENT, {
    variables: {
      where: {
        id: match.params.id
      },
    }
  });


  const handleDeleteAssessment = () => {
    deleteAssessment({
      variables: {
        where: {
          id: match.params.id
        },
      }
    });
  }

  useEffect(() => {
    if (deleteAssesmentData && !deletingAssessment) {
      history.push('/assessments')
    }
  }, [deleteAssesmentData, deletingAssessment, history]);


  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <QuestionStat 
            assessment={data.assessment} 
          />
        </Grid>
      </Grid>
      <p>{data.assessment.title}</p>
      <p>{data.assessment.description}</p>
      <p>{data.assessment.createdAt}</p>
      {data.assessment.questions && data.assessment.questions.map(question => (
        <div key={question.content}>
          <p>{question.content}</p>
          {question.options.map(option => (
            <p key={option.content}>
              {option.content}{option.correct && 'Answer!'}
            </p>
          ))}
        </div>
      ))}
      <Button
        color="primary"
        variant="contained"
        margin="normal"
        onClick={handleDeleteAssessment}
      >
        Delete Assesment
      </Button>
    </div>
  );
};

export default AssessmentDetail;
