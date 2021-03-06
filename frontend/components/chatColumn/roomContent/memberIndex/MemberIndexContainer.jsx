import { connect } from 'react-redux';
import React from 'react';
import MemberIndex from './MemberIndex';
import {withRouter} from 'react-router';
import { toggleMemberIndex } from '../../../../actions/uiActions'

const mapStateToProps = (state, ownProps) => {
    let onlineMembers = [];
    let offlineMembers = [];
    // console.log(state.serverMembers !== {});
    Object.values(state.serverMembers).forEach(user => {
      if (user.online_status === 'online') {
        onlineMembers.push(user);
      } else if (user.online_status === 'offline') {
        offlineMembers.push(user)
      }
    })
    // if(state.serverMembers !== {}){
    //   onlineMembers = Object.values(state.serverMembers).map(user => {
    //     if (user.online_status === 'online') {
    //       return user;
    //     } else {
    //       return {};
    //     }
    //   });
    //
    //   offlineMembers = Object.values(state.serverMembers).map(user => {
    //     if (user.online_status === 'offline') {
    //       return user;
    //     } else {
    //       return {};
    //     }
    //   });
    // }
    return {onlineMembers, offlineMembers, memberIndexState: state.ui.components.memberIndex};
};

const mapDispatchToProps = dispatch => ({
  toggleMemberIndex: toggleBool => dispatch(toggleMemberIndex(toggleBool))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberIndex));
