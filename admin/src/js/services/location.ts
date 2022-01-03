// import * as angular from 'angular';

// angular.module('inboxServices').factory('Location',
//   function($window) {

//     'use strict';
//     'ngInject';

//     const location = $window.location;
//     const dbName = 'medic';
//     const path = '/';
//     const adminPath = '/admin/';
//     const port = location.port ? ':' + location.port : '';
//     const url = location.protocol + '//' + location.hostname + port + '/' + dbName;

//     return {
//       path: path,
//       adminPath: adminPath,
//       dbName: dbName,
//       url: url
//     };
//   }
// );

export class LocationService {
  dbName = 'medic';
  path = '/';
  adminPath = '/admin/';

  url;

  constructor( private document: Document) {
    const location = document.location;
    const port = location.port ? ':' + location.port : '';
    this.url = location.protocol + '//' + location.hostname + port + '/' + this.dbName;
  };

}

