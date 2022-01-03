const _ = require('lodash/core');

import * as angular from 'angular';

angular.module('controllers').controller('UsersCtrl',
  function (
    $log,
    $scope,
    DB,
    Modal,
    Settings
  ) {

    'use strict';
    'ngInject';

    Settings()
      .then(function(settings) {
        $scope.roles = settings.roles;
      })
      .catch(function(err) {
        $log.error('Error fetching settings', err);
      });

    $scope.updateList = function() {
      $scope.loading = true;
      const params = { include_docs: true, key: ['user-settings'] };
      DB().query('medic-client/doc_by_type', params)
        .then(function(settings) {
          $scope.users = _.map(settings.rows, 'doc');
          $scope.loading = false;
        })
        .catch(function(err) {
          $scope.error = true;
          $scope.loading = false;
          $log.error('Error fetching users', err);
        });
    };

    $scope.deleteUserPrepare = function(user, $event) {
      $event.stopPropagation();
      Modal({
        templateUrl: 'templates/delete_user_confirm.html',
        controller: 'DeleteUserCtrl',
        model: user
      });
    };

    $scope.editUser = function(user) {
      Modal({
        templateUrl: 'templates/edit_user.html',
        controller: 'EditUserCtrl',
        model: user
      });
    };

    $scope.$on('UsersUpdated', function() {
      $scope.updateList();
    });

    $scope.updateList();

  }
);


// let UserComponent = {
//   selector: "mm-users",
//   template: '../templates/users.html',
//   // bindings: {
//   //   user: "="
//   // },

//   controller: class UserController {

//     //private user;
//     private log;
//     private dB;
//     private modal;
//     private eettings
//     private loading;


//     constructor(log, dB, modal, settings) {
//       this.log;
//      this.dB =db ;
//      this.modal;
//      this.settings = settings
//     }

//     updateList () {
//       this.loading = true;
//       const params = { include_docs: true, key: ['user-settings'] };
//       DB().query('medic-client/doc_by_type', params)
//         .then(function(settings) {
//           this.users = _.map(settings.rows, 'doc');
//           this.loading = false;
//         })
//         .catch(function(err) {
//           this.error = true;
//           this.loading = false;
//           this.error('Error fetching users', err);
//         });
//     };

//     deleteUserPrepare (user, $event) {
//       $event.stopPropagation();
//       Modal({
//         templateUrl: 'templates/delete_user_confirm.html',
//         controller: 'DeleteUserCtrl',
//         model: user
//       });
//     };

//     editUser(user) {
//       Modal({
//         templateUrl: 'templates/edit_user.html',
//         controller: 'EditUserCtrl',
//         model: user
//       });
//     };

//   }
// };


// angular
//   .module("codecraft")
//   .component(UserComponent.selector, UserComponent);