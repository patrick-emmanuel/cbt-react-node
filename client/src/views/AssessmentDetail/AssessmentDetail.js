import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_ASSESSMENT } from './query';

const AssessmentDetail = ({ match }) => {
  const { loading, error, data } = useQuery(GET_ASSESSMENT, {
    variables: {
      where: {
        id: match.params.id
      },
    }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <p>{data.assessment.id}</p>
      <p>{data.assessment.title}</p>
      <p>{data.assessment.description}</p>
      <p>{data.assessment.createdAt}</p>
    </div>
  );
};

export default AssessmentDetail;
