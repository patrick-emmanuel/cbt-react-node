import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { useQuery, useMutation } from '@apollo/react-hooks';
import CheckCircle from '@material-ui/icons/CheckCircle';
import {
  QuestionStat,
} from '.';
import { GET_ASSESSMENT } from '../../query';
import { DELETE_ASSESSMENT } from './mutation';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  card: {
    marginTop: theme.spacing(5)
  },
  question: {
    marginTop: theme.spacing(4)
  },
  checkmarkIcon: {
    color: theme.palette.success.main,
    marginLeft: theme.spacing(1)
  },
  option: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  deleteButton: {
    margin: theme.spacing(2),
    background: theme.palette.error.main,
    color: theme.palette.white
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
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h3">
            {data.assessment.title}
          </Typography>
          <Typography>{data.assessment.description}</Typography>
          <div>
            {data.assessment.questions && 
              data.assessment.questions.map((question, index) => (
              <div 
                className={classes.question} 
                key={question.content}
              >
                <Typography variant="h5">
                  {index + 1}. {question.content}
                </Typography>
                {question.options.map(option => (
                  <div className={classes.option}>
                    <Typography>
                      {option.content}
                    </Typography>
                    {option.correct && <CheckCircle className={classes.checkmarkIcon}/>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
        <Button
          variant="contained"
          margin="normal"
          className={classes.deleteButton}
          onClick={handleDeleteAssessment}
        >
          Delete Assesment
        </Button>
      </Card>
    </div>
  );
};

export default AssessmentDetail;
