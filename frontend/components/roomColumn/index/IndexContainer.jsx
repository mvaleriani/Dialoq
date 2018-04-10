import { connect } from 'react-redux';
import React from 'react';
import Index from './Index';
import {withRouter} from 'react-router'
// import {  } from '../../actions/...';

const mapStateToProps = (state, ownProps) => {
  return {rooms: Object.values(state.rooms)};
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Index));
