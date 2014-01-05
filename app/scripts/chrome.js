/**
 * @overview Chrome extension API wrapped
 * to angular
 */
'use strict';

angular.module('chrome', []).service('omnibox', function() {
    return chrome.omnibox;
});
