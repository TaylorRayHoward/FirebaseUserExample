import { GET_DB_USERS } from '../Actions/UserActions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_DB_USERS:
      return action.payload;
    default:
      return state;
  }
}
