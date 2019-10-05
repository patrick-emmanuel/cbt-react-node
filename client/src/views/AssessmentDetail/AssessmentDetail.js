import React from 'react';
import {
  Button,
} from '@material-ui/core';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GET_ASSESSMENT } from './query';
import { DELETE_ASSESSMENT } from './mutation';

const AssessmentDetail = ({ match }) => {
  const [deleteAssessment, {
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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <p>{data.assessment.id}</p>
      <p>{data.assessment.title}</p>
      <p>{data.assessment.description}</p>
      <p>{data.assessment.createdAt}</p>
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
