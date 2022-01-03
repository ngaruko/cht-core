const moment = require('moment');

import * as angular from 'angular';

/**
 * Wrapper function for moment.localeData() so it can be mocked
 */
(function () {

  'use strict';

angular.module('inboxServices').factory('MomentLocaleData',
    function() {
      return moment.localeData;
    }
  );

}());
