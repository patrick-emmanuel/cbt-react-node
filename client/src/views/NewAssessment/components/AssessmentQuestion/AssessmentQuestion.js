import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Button
} from '@material-ui/core';
import BuildQuestions from './BuildQuestions';

const useStyles = makeStyles(theme => ({
  addQuestionButton: {
    marginTop: theme.spacing(2)
  }
}));

const AssessmentQuestion = ({ page }) => {
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

    Object.keys(question).forEach((value, index) => {
      if (value === 'question') {
        question[value] = {
          type: "text",
          name: `question${questionsLength}`,
          label: `Question ${questionsLength}`
        }
      } else {
        question[value] = {
          type: "text",
          name: `question${questionsLength}option${index}`,
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
        <BuildQuestions questions={questions} />
        <Button
          color="primary"
          variant="contained"
          margin="normal"
          className={classes.addQuestionButton}
          onClick={addQuestion}
        >
          Add Question
        </Button>
      </div>
    );
  }
  return null;
};

export default AssessmentQuestion;
