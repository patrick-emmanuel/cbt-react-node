import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Button
} from '@material-ui/core';
import BuildQuestions from './BuildQuestions';

const useStyles = makeStyles(theme => ({
  addQuestionButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  manageButtons: {
    marginTop: theme.spacing(2)
  }
}));

const AssessmentQuestion = ({ page, register, createAssessmentLoading }) => {
  const [questions, setQuestions] = useState([]);

  const classes = useStyles();

  const addQuestion = () => {
    const questionsLength = questions.length + 1;
    const question = {
      question: {},
      option1: {},
      option2: {},
      option3: {},
      option4: {}
    };

    Object.keys(question).forEach((key, index) => {
      if (key === 'question') {
        question[key] = {
          type: "text",
          name: `question${questionsLength}`,
          label: `Question ${questionsLength}`
        }
      } else {
        question[key] = {
          type: "text",
          name: `question${questionsLength}.option${index}`,
          label: `Option ${index}`
        }
      }
    });
    question['id'] = questionsLength;
    setQuestions(questions.concat([question]))
  }

  if (page === 2) {
    return (
      <div>
        <Typography
          className={classes.title}
          variant="h4"
        >
          Questions
        </Typography>
        <BuildQuestions
          questions={questions}
          register={register}
        />
        <div className={classes.manageButtons}>
          <Button
            color="primary"
            variant="contained"
            margin="normal"
            className={classes.addQuestionButton}
            onClick={addQuestion}
          >
            Add Question
          </Button>
          {questions.length > 0 &&
            <Button 
              color="secondary"
              type="submit"
              variant="contained"
              margin="normal"
              className={classes.submitButton}
            >
              {createAssessmentLoading ? 'Loading' : 'Submit' }
          </Button>}
        </div>
      </div>
    );
  }
  return null;
};

export default AssessmentQuestion;
