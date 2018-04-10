import { connect } from 'react-redux';

import { login, logout } from '../../actions/sessionActions';
import Splash from './Splash';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
