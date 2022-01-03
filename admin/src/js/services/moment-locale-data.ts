const moment = require('moment');

/**
 * Wrapper function for moment.localeData() so it can be mocked
 */
(function () {

  'use strict';

  import * as angular from 'angular';

angular.module('inboxServices').factory('MomentLocaleData',
    function() {
      return moment.localeData;
    }
  );

}());
