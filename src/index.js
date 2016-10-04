var React= require('react');
var ReactDOM = require('react-dom');
var createStore = require('redux').createStore;
var Provider=require('react-redux').Provider;
var gameReducers= require('./reducers/reducers').gameReducer;
var store= createStore(gameReducers);
var Game= require('./components/Game');
console.log(store.getState);
ReactDOM.render(
                <Provider store={store}>
                <Game />
                </Provider>,
                document.getElementById('app')
                );










// var React = require('react');
// var ReactDOM = require('react-dom');
// var Provider = require('react-redux').Provider;

// var store = require('./src/components/app');
// // var RepositoryList = require('./src');

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(
//         <Provider store={store}>
//             <>
//         </Provider>,
//         document.getElementById('app')
//     );
// });