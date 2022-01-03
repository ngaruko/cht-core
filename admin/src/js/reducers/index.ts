import * as angular from 'angular';

(function() {
  const redux = require('redux');

  const services = require('./services');

  const rootReducer = redux.combineReducers({
    services,
  });

  angular.module('inboxServices').constant('RootReducer', rootReducer);
}());
