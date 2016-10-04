var redux = require('redux');
var createStore=redux.createStore;
var actions= require('./actions_repo');
var repositoryReducer= require('./reducers_repo').repositoryReducer;
var store=createStore(repositoryReducer);

// store.dispatch(actions.addRepository('dd'));
// store.dispatch(actions.rateRepository('dd',3));
// store.dispatch(actions.addRepository('erty'));
// store.getState();

module.exports = store;