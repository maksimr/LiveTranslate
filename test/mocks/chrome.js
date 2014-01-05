/**
 * @overview Mock module for chrome API
 */
'use strict';

angular.module('chromeMock', [])
/**
 * @desc The omnibox API allows you to
 * register a keyword with Google Chrome's address bar,
 * which is also known as the omnibox.
 *
 * @link http://developer.chrome.com/extensions/omnibox.html
 */
.service('omnibox', function() {
    return {
        setDefaultSuggestion: function( /*object suggestion*/ ) {},
        onInputStarted: {
            addListener: function( /*callback*/ ) {}
        },
        onInputChanged: {
            addListener: function( /*callback*/ ) {}
        },
        onInputEntered: {
            addListener: function( /*callback*/ ) {}
        },
        onInputCancelled: {
            addListener: function( /*callback*/ ) {}
        }
    };
});
