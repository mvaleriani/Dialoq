import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      console.log(action.modal);
      return action.modal;
    case CLOSE_MODAL:
      console.log(action.modal);
      return null;
    default:
      return state;
  }
}
