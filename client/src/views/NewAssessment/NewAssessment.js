import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent
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

const NewAssessment = ({ history }) => {
  const classes = useStyles();
  const [assessmentInfo, setAssessmentInfo] = useState({
    title: '',
    description: ''
  });
  const { register, handleSubmit } = useForm();
  const [addAssessment, {
    loading: createAssessmentLoading }
  ] = useMutation(CREATE_ASSESSMENT);
  const [page, setPage] = useState(1);
  const max = 2;

  const handleChange = (e) => {
    e.persist();
    setAssessmentInfo(assessmentInfo => ({
      ...assessmentInfo,
      [e.target.name]: e.target.value
    }));
  }

  const handleNext = (e) => {
    e.preventDefault();
    const currentPage = Math.min(page + 1, max);
    setPage(currentPage);
  }

  const formatQuestions = (questions) => {
    const create = Object.keys(questions).map(key => {
      const question = questions[key];
      if (question.questionType === "SELECT") {
        return {
          content: question.content,
          options: {
            create: [
              {
                content: question.option1.content,
                correct: !!question.option1.correct
              },
              {
                content: question.option2.content,
                correct: !!question.option2.correct
              },
              {
                content: question.option3.content,
                correct: !!question.option3.correct
              },
              {
                content: question.option4.content,
                correct: !!question.option4.correct
              }
            ]
          }
        }
      }
      return { content: question.content }
    })
    return create;
  }

  const onSubmit = (questions) => {
    const authorId = localStorage.getItem('userId');
    const create = formatQuestions(questions);
    const { title, description } = assessmentInfo;
    addAssessment({
      variables: {
        data: {
          author: {
            connect: {
              id: authorId
            }
          },
          title,
          description,
          published: false,
          questions: { create }
        }
      }
    });
    history.push('/assessments')
  }

  return (
    <div className={classes.root}>
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <form
              className={classes.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <AssessmentInfo
                page={page}
                assessmentInfo={assessmentInfo}
                handleChange={handleChange}
              />
              <AssessmentQuestion
                page={page}
                register={register}
                createAssessmentLoading={createAssessmentLoading}
              />
              {page < max && <Button
                className={classes.nextButton}
                color="primary"
                type="submit"
                variant="contained"
                margin="normal"
                onClick={handleNext}
              >
                Next
              </Button>
              }
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewAssessment;
