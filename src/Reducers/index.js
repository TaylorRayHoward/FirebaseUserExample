import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './UserReducer';
import LoadingReducer from './LoadingReducer';
import DbUserReducer from './DbUserReducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: UserReducer,
  loading: LoadingReducer,
  dbUsers: DbUserReducer
});

export default rootReducer;