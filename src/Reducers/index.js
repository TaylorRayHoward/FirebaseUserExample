import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './UserReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: UserReducer,
  loading: LoadingReducer
});

export default rootReducer;