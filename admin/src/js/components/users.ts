/*
requires:
db service
settings service
Modal
 */

const _ = require('lodash/core');

import * as angular from 'angular';
import { DbService } from '../services/db';

// angular.module('controllers').controller('UsersCtrl',
//   function (
//     $log,
//     $scope,
//     DB,
//     Modal,
//     Settings
//   ) {

//     'use strict';
//     'ngInject';

//     Settings()
//       .then(function(settings) {
//         $scope.roles = settings.roles;
//       })
//       .catch(function(err) {
//         $log.error('Error fetching settings', err);
//       });

//     $scope.updateList = function() {
//       $scope.loading = true;
//       const params = { include_docs: true, key: ['user-settings'] };
//       DB().query('medic-client/doc_by_type', params)
//         .then(function(settings) {
//           $scope.users = _.map(settings.rows, 'doc');
//           $scope.loading = false;
//         })
//         .catch(function(err) {
//           $scope.error = true;
//           $scope.loading = false;
//           $log.error('Error fetching users', err);
//         });
//     };

//     $scope.deleteUserPrepare = function(user, $event) {
//       $event.stopPropagation();
//       Modal({
//         templateUrl: 'templates/delete_user_confirm.html',
//         controller: 'DeleteUserCtrl',
//         model: user
//       });
//     };

//     $scope.editUser = function(user) {
//       Modal({
//         templateUrl: 'templates/edit_user.html',
//         controller: 'EditUserCtrl',
//         model: user
//       });
//     };

//     $scope.$on('UsersUpdated', function() {
//       $scope.updateList();
//     });

//     $scope.updateList();

//   }
// );



//import { DbService } from './db';
import { SessionService } from '../services/session';
import { SettingsService } from '../services/settings';
let UserComponent = {
  selector: "mm-users",
  template: '../templates/users.html',
  // bindings: {
  //   user: "="
  // },

  controller: class UserController {

    //private user;
    private log;
    private dB;
    private modal;
    private eettings
    private loading;


    // constructor(log, dB, modal, settings) {
    //   this.log;
    //  this.dB =db ;
    //  this.modal;
    //  this.settings = settings
    // }

    constructor(
      private db:DbService,
      private session:SessionService,
      private settings:SettingsService,
    ){
      //get settings
alert('You just landed on users page')
    settings.get().then(function(settings) {
      this.roles = settings.roles;
    })
    .catch(function(err) {
      this.error('Error fetching settings', err);
    });

    }


    updateList () {
      this.loading = true;
      const params = { include_docs: true, key: ['user-settings'] };
      this.db.get()
        .then(function(settings) {
          this.users = _.map(settings.rows, 'doc');
          this.loading = false;
        })
        .catch(function(err) {
          this.error = true;
          this.loading = false;
          this.error('Error fetching users', err);
        });
    };

    // deleteUserPrepare (user, $event) {
    //   $event.stopPropagation();
    //   Modal({
    //     templateUrl: 'templates/delete_user_confirm.html',
    //     controller: 'DeleteUserCtrl',
    //     model: user
    //   });
    // };

    // editUser(user) {
    //   Modal({
    //     templateUrl: 'templates/edit_user.html',
    //     controller: 'EditUserCtrl',
    //     model: user
    //   });
    // };

  }
};


angular
  .module("controllers")
  .component(UserComponent.selector, UserComponent);