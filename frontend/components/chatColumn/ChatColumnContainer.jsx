import { connect } from 'react-redux';
import React from 'react';
import ChatColumn from './ChatColumn';
import {withRouter} from 'react-router'

const mapStateToProps = (state, ownProps) => {

  
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatColumn));
