/**
 * Service to encapsulate repeatedly used translation logic
 */
import * as angular from 'angular';

angular.module('inboxServices').service('Translate',
  function(
    $translate
  ) {

    'use strict';
    'ngInject';

    const fieldIsRequired = function(fieldKey) {
      return $translate(fieldKey)
        .then(function(field) {
          return $translate('field is required', { field: field });
        });
    };

    return {
      fieldIsRequired: fieldIsRequired
    };
  }
);
