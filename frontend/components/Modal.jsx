import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import React from 'react';

import { createServer, joinServer } from '../actions/serverActions';
import { createRoom } from '../actions/roomActions';
import { updateUserDetails } from '../actions/sessionActions';

import { closeModal } from '../actions/modalActions';


const mapStateToProps = (state, ownProps) => {
    return { modalType: state.ui.modal };
};
const mapDispatchToProps = dispatch => {
    return {
        createServer: (server) => dispatch(createServer(server)),
        joinServer: server => dispatch(joinServer(server)),
        createRoom: room => dispatch(createRoom(room)),
        updateUserDetails: user => dispatch(updateUserDetails(user)),
        closeModal: () => dispatch(closeModal()),
    };
};

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {modalEl: ""};
        // this.render = this.render.bind(this)
    }
    componentDidMount() {
        
        
    }
    componentWillReceiveProps(nextProps){
        let modalEl = '';
        let modalStuff = '';
    
        if (nextProps.modalType) {
            console.log('its not null');
            
            if (nextProps.modalType == 'user') {
                modalStuff = (<span>Account Settings</span>);
            } else if (nextProps.modalType == 'server'){
                
            } else if (nextProps.modalType == 'room'){
                
            }
            modalEl = (
                <div className="modal-wrapper" style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div onClick={this.props.closeModal} className="modal-background" style={{ height: '100%', width: '100%', background: '#202225ce' }}></div>
                    <div className="modal" style={{ height: '75vh', width: '70vw', background: '#3c898c', borderRadius: '10px', position: 'absolute' }}>
                        {modalStuff}
                    </div>
                </div>
            );
        } 
        this.setState({modalEl})
    }

    render() {
        return (
            // this.state.modalEl
            <div></div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
