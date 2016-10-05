var React= require('react');
var ReactDOM = require('react-dom');
var createStore = require('redux').createStore;
var Provider=require('react-redux').Provider;


var gameReducers= require('./reducers/reducers').gameReducer;

var store= createStore(gameReducers);
var Game= require('./components/Game');


ReactDOM.render(
                <Provider store={store}>
                    <Game />
                </Provider>,
                document.getElementById('app')
                );

