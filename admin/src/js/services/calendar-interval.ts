const calendarInterval = require('@medic/calendar-interval');
import * as angular from 'angular';

(function () {

  'use strict';
angular.module('inboxServices').factory('CalendarInterval', function() {
    return {
      getCurrent: calendarInterval.getCurrent,
    };
  });
}());
