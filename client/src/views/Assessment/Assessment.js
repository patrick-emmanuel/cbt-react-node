import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from '@material-ui/core';
import AssessmentList from './components/AssessmentList';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// move to a generic 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

const Assessment = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  // const [showNewAssessmentPage, setShowNewAssessmentPage] = (0);

  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={tabIndex} onChange={handleChange} aria-label="assessment tabs">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Another" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <AssessmentList/>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        Another
      </TabPanel>
    </div>
  );
};

export default Assessment;
