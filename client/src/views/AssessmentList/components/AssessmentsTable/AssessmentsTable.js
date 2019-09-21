import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const AssessmentsTable = props => {
  const { className, assessments, ...rest } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  if(assessments.length > 0) {
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Created At</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assessments.slice(0, rowsPerPage).map(assessment => (
                    <TableRow
                      className={classes.tableRow}
                      hover
                      key={assessment.id}
                    >
                      <TableCell>
                        <div className={classes.titleContainer}>
                          <Typography variant="body1">{assessment.title}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>
                        {moment(assessment.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={assessments.length}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
    );
  } else {
    return (
      <div className={classes.noContentContainer}>
        <Typography variant="h4">
          No assessments created yet.
        </Typography>
      </div>
    );
  }
};

AssessmentsTable.propTypes = {
  className: PropTypes.string,
  assessments: PropTypes.array.isRequired
};

export default AssessmentsTable;
