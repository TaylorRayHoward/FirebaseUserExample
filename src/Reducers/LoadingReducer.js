import { USER_STATUS } from '../Actions/UserActions';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
