module.exports = function(config) {
    'use strict';

    config.set({
        basePath: '',
        frameworks: ['mocha', 'expect', 'sinon'],
        files: [
            'app/bower_components/**/*.min.js',
            'app/bower_components/**/angular-mocks.js',

            'app/scripts/**/*.js',

            'test/mocks/*.js',
            'test/unit/mocha-globals.js',
            'test/unit/**/*.js'
        ],
        exclude: [
            'app/scripts/background.js'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: false
    });
};
