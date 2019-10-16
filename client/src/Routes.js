import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  AssessmentList as AssessmentsView,
  AssessmentDetail as AssessmentDetailView,
  NewAssessment as NewAssessmentView,
  StudentAssessment as StudentAssessmentView,
  NotFound as NotFoundView,
  SignUp as SignUpView,
  Login as LoginView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        privateRoute
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={AssessmentsView}
        exact
        privateRoute
        layout={MainLayout}
        adminRoute
        path="/assessments"
      />
      <RouteWithLayout
        component={NewAssessmentView}
        exact
        privateRoute
        layout={MainLayout}
        adminRoute
        path="/assessments/new"
      />
      <RouteWithLayout
        component={StudentAssessmentView}
        exact
        privateRoute
        layout={MainLayout}
        path="/assessments/student"
      />
      <RouteWithLayout
        component={AssessmentDetailView}
        exact
        layout={MainLayout}
        path="/assessments/:id"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={LoginView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
