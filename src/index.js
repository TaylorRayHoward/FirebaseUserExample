import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Containers/Login';
import CreateAccount from './Containers/CreateAccount';
import LoadingComponent from './Containers/LoadingComponent';
import ListUsers from './Containers/ListUsers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/CreateAccount" component={CreateAccount}/>
          <Route path="/Login" component={Login}/>
          <Route path="/" component={ListUsers}/>
          {/*<AuthenticatedComponent>*/}
          {/*</AuthenticatedComponent>*/}
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
