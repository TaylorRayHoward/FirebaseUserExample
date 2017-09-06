import { auth, database } from '../Firebase';

export const GET_USER = 'get_user';
export const GET_DB_USERS = 'get_db_users';
export const USER_STATUS = 'user_status';
export const USER_DB_STATUS = 'user_db_status';

export function getUser() {
  return dispatch => {
    dispatch({
      type: USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  };
}

export function getDbUsers() {
  return dispatch => {
    dispatch({
      type: USER_DB_STATUS,
      payload: true
    });
    database.ref('users').on('value', db => {
      dispatch({
        type: GET_DB_USERS,
        payload: db.val()
      });
      dispatch({
        type: USER_DB_STATUS,
        payload: false
      });
    });
  }
}

export function login(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function createAccount(data) {
  const { fname, lname, email, password } = data;
  return dispatch => auth.createUserWithEmailAndPassword(email, password).then((user) => {
    if(user !== null) {
      database.ref('users').child(user.uid).set({
        fname,
        lname
      })
    }
  });
}
