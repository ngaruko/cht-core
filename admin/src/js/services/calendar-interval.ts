const calendarInterval = require('@medic/calendar-interval');

(function () {

  'use strict';

  import * as angular from 'angular';

angular.module('inboxServices').factory('CalendarInterval', function() {
    return {
      getCurrent: calendarInterval.getCurrent,
    };
  });
}());
