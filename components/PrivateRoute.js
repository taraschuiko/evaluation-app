import { useEffect } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

function Dashboard({ children, auth }) {
  useEffect(() => { if (!auth) Router.replace(`/login?originalRoute=${window.location.pathname}`); });
  return auth ? (children) : null;
}

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(Dashboard);
