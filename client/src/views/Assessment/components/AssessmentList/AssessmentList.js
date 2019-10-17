import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ASSESSMENTS } from '../../query';
import AssessmentsListToolbar from './AssessmentsListToolbar';
import AssessmentsTable from './AssessmentsTable';

const AssessmentList = () => {
  const { loading, error, data } = useQuery(GET_ASSESSMENTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <AssessmentsListToolbar />
      <div>
        <AssessmentsTable assessments={data.assessments} />
      </div>
    </div>
  );
};

export default AssessmentList;
