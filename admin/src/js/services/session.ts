const COOKIE_NAME = 'userCtx';
const ONLINE_ROLE = 'mm-online';
const _ = require('lodash/core');
import * as angular from 'angular';

// (function () {

//   'use strict';



// angular.module('inboxServices').factory('Session',
//     function(
//       $http,
//       $log,
//       $window,
//       Location,
//       ipCookie
//     ) {

//       'ngInject';

//       let userCtxCookieValue;
//       const getUserCtx = function() {
//         if (!userCtxCookieValue) {
//           userCtxCookieValue = ipCookie(COOKIE_NAME);
//         }

//         return userCtxCookieValue;
//       };

//       const navigateToLogin = function() {
//         $log.warn('User must reauthenticate');
//         const params = new URLSearchParams();
//         params.append('redirect', $window.location.href);

//         const userCtx = getUserCtx();
//         const username = userCtx && userCtx.name;
//         if (username) {
//           params.append('username', username);
//         }
//         ipCookie.remove(COOKIE_NAME, { path: '/' });
//         userCtxCookieValue = undefined;
//         $window.location.href = `/${Location.dbName}/login?${params.toString()}`;
//       };

//       const logout = function() {
        // return $http.delete('/_session')
        //   .catch(function() {
        //     // Set cookie to force login before using app
        //     ipCookie('login', 'force', { path: '/' });
        //   })
        //   .then(navigateToLogin);
//       };

      // const refreshUserCtx = function() {
      //   return $http
      //     .get('/' + Location.dbName + '/login/identity')
      //     .catch(function() {
      //       return logout();
      //     });
      // };

//       const checkCurrentSession = function() {
//         const userCtx = getUserCtx();
//         if (!userCtx || !userCtx.name) {
//           return logout();
//         }
//         return $http.get('/_session')
//           .then(function(response) {
//             const name = response.data &&
//                        response.data.userCtx &&
//                        response.data.userCtx.name;
//             if (name !== userCtx.name) {
//               // connected to the internet but server session is different
//               return logout();
//             }
//             if (_.difference(userCtx.roles, response.data.userCtx.roles).length ||
//                 _.difference(response.data.userCtx.roles, userCtx.roles).length) {
//               return refreshUserCtx().then(() => true);
//             }
//           })
//           .catch(function(response) {
//             if (response.status === 401) {
//               // connected to the internet but no session on the server
//               navigateToLogin();
//             }
//           });
//       };

//       // TODO Use a shared library for this duplicated code #4021
//       const hasRole = function(userCtx, role) {
//         return !!(userCtx && userCtx.roles && userCtx.roles.includes(role));
//       };

//       const isAdmin = function(userCtx) {
//         userCtx = userCtx || getUserCtx();
//         return hasRole(userCtx, '_admin') ||
//                hasRole(userCtx, 'national_admin'); // deprecated: kept for backwards compatibility: #4525
//       };

//       const isDbAdmin = function(userCtx) {
//         userCtx = userCtx || getUserCtx();
//         return hasRole(userCtx, '_admin');
//       };

//       return {
//         logout: logout,

//         /**
//          * Get the user context of the logged in user. This will return
//          * null if the user is not logged in.
//          */
//         userCtx: getUserCtx,

//         navigateToLogin: navigateToLogin,

//         init: checkCurrentSession,

//         /**
//          * Returns true if the logged in user has the db or national admin role.
//          * @param {userCtx} (optional) Will get the current userCtx if not provided.
//          */
//         isAdmin: isAdmin,

//         // Returns true if the logged in user is a DB admin
//         // @param {userCtx} (optional) Will get the current userCtx if not provided.
//         isDbAdmin: isDbAdmin,

//         /**
//          * Returns true if the logged in user is online only
//          */
//         isOnlineOnly: function(userCtx) {
//           userCtx = userCtx || getUserCtx();
//           return isAdmin(userCtx) ||
//                  hasRole(userCtx, ONLINE_ROLE);
//         }
//       };

//     }
//   );

// }());



//import * as _ from 'lodash-es';
// import { Injectable, Inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
// import { DOCUMENT } from '@angular/common';

import { LocationService } from './location';

// @Injectable({
//   providedIn: 'root'
// })
export class SessionService {
  userCtxCookieValue = null
  $http: any

  constructor(
    //private cookieService: CookieService,
    //private http: HttpClient,
    //@Inject(DOCUMENT) private document: Document,
    private location: LocationService)
  { }

  navigateToLogin() {
    console.warn('User must reauthenticate');
    const params = new URLSearchParams();
    //params.append('redirect', this.document.location.href);
    const userCtx = this.userCtx();
    const username = userCtx && userCtx.name;
    if (username) {
      params.append('username', username);
    }

    //this.cookieService.delete(COOKIE_NAME, '/');
    this.userCtxCookieValue = undefined;
    //this.document.location.href = `/${this.location.dbName}/login?${params.toString()}`;
  }

  logout() {
    return this.$http.delete('/_session')
          .catch(function() {
            // Set cookie to force login before using app
            ipCookie('login', 'force', { path: '/' });
          })
          .then(this.navigateToLogin);
  }

  /**
   * Get the user context of the logged in user. This will return
   * null if the user is not logged in.
   */
  userCtx () {
    if (!this.userCtxCookieValue) {
      //this.userCtxCookieValue = JSON.parse(this.cookieService.get(COOKIE_NAME));
    }

    return this.userCtxCookieValue;
  }

  private refreshUserCtx() {
    return this.$http
    .get('/' + this.location.dbName + '/login/identity')
    .catch(function() {
      return logout();
    });
  }

  init () {
    const userCtx = this.userCtx();
    if (!userCtx || !userCtx.name) {
      return this.logout();
    }
    return this.$http
      //.get<{ userCtx: { name:string; roles:string[] } }>('/_session', { responseType: 'json' })
      .toPromise()
      .then(value => {
        const name = value && value.userCtx && value.userCtx.name;
        if (name !== userCtx.name) {
          // connected to the internet but server session is different
          this.logout();
          return;
        }
        if (_.difference(userCtx.roles, value.userCtx.roles).length ||
          _.difference(value.userCtx.roles, userCtx.roles).length) {
          return this.refreshUserCtx().then(() => true);
        }
      })
      .catch(response => {
        if (response.status === 401) {
          // connected to the internet but no session on the server
          this.navigateToLogin();
        }
      });
  }

  private hasRole (userCtx, role) {
    return !!(userCtx && userCtx.roles && userCtx.roles.includes(role));
  }

  isAdmin(userCtx?) {
    userCtx = userCtx || this.userCtx();
    return this.isDbAdmin(userCtx) ||
      this.hasRole(userCtx, 'national_admin'); // deprecated: kept for backwards compatibility: #4525
  }

  isDbAdmin(userCtx?) {
    userCtx = userCtx || this.userCtx();
    return this.hasRole(userCtx, '_admin');
  }

  /**
   * Returns true if the logged in user is online only
   */
  isOnlineOnly(userCtx?) {
    userCtx = userCtx || this.userCtx();
    return this.isAdmin(userCtx) || this.hasRole(userCtx, ONLINE_ROLE);
  }
}

function ipCookie(arg0: string, arg1: string, arg2: { path: string; }) {
  throw new Error('Function not implemented.');
}

function logout() {
  throw new Error('Function not implemented.');
}

