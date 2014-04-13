define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng) {
    'use strict';

    require(['jquery', 'bootstrap']);

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
