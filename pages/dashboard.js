import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import DashboardContent from '../components/Dashboard';

function Dashboard({ auth }) {
  useEffect(() => { if (!auth) Router.replace('/login'); });
  return auth ? <DashboardContent /> : null;
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(Dashboard);
