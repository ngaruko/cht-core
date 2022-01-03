import * as angular from 'angular';

angular.module('inboxFilters').filter('resourceIcon',
  function (
    $sce,
    ResourceIcons
  ) {
    'use strict';
    'ngInject';
    return (name, placeholder = '') => {
      return $sce.trustAsHtml(ResourceIcons.getImg(name, 'resources', placeholder));
    };
  }
);

import * as angular from 'angular';

angular.module('inboxFilters').filter('headerLogo',
  function(
    $sce,
    ResourceIcons
  ) {
    'use strict';
    'ngInject';
    return function(name) {
      return $sce.trustAsHtml(ResourceIcons.getImg(name, 'branding'));
    };
  }
);

import * as angular from 'angular';

angular.module('inboxFilters').filter('partnerImage',
  function(
    $sce,
    ResourceIcons
  ) {
    'use strict';
    'ngInject';
    return name => {
      return $sce.trustAsHtml(ResourceIcons.getImg(name, 'partners'));
    };
  }
);
