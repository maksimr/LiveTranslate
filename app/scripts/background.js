'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.omnibox.onInputChanged.addListener(function(text) {
    console.log('onInputChanged', text);
});

chrome.omnibox.onInputEntered.addListener(function(text) {
    console.log('onInputEntered', text);
});
