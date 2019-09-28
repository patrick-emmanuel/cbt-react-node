import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
} from '@material-ui/core';
import { AssessmentInfo, AssessmentQuestion } from './components';
import { CREATE_ASSESSMENT } from './mutation';

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
  const { newAssessmentFormRef, handleSubmit } = useForm();
  const [addAssessment, { data }] = useMutation(CREATE_ASSESSMENT);
  const [page, setPage] = useState(1);
  const max = 2;

  const handleNext = (e) => {
    e.preventDefault();
    const currentPage = Math.min(page + 1, max);
    setPage(currentPage);
  }

  const onSubmit = (values) => {
    addAssessment({
      variables: {
        author: {
          connect: {
            id: '' //current user.id
          }
        },
        title: values.title,
        description: values.description,
        published: false,
        questions: {
          create: [
            {
              content: values.questionContent,
              options: {
                create: {
                  content: values.options.content,
                  correct: false,
                }
              }
            }
          ]
        }
      }
    });
  }

  return (
    <div className={classes.root}>
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <AssessmentInfo page={page} newAssessmentFormRef={newAssessmentFormRef}/>
              <AssessmentQuestion page={page} newAssessmentFormRef={newAssessmentFormRef}/>
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
