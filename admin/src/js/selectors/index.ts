import * as angular from 'angular';// Services
const getServicesState = state => state.services;
const getLastChangedDoc = state => getServicesState(state).lastChangedDoc;

angular.module('inboxServices').constant('Selectors', {
  getLastChangedDoc,
});
