import React, { useEffect } from 'react';
import {
  Button,
} from '@material-ui/core';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GET_ASSESSMENT } from './query';
import { DELETE_ASSESSMENT } from './mutation';

const AssessmentDetail = ({ match, history }) => {
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
    <div>
      <p>{data.assessment.id}</p>
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
