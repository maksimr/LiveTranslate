/* global describe, it, expect, beforeEach, module, inject */

(function() {
    'use strict';

    describe('translator', function() {
        var $httpBackend;

        beforeEach(module('translator'));

        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
        }));

        describe('google translator API', function() {
            it('should make request to goole host', inject(['google', '$http',
                function(google, $http) {
                    sinon.spy($http, 'get');

                    google.translate('Hello World!');

                    expect($http.get.calledWithMatch('translate.google.com')).to.be.ok();
                }
            ]));

            it('should parse awfull google response', inject(['google',
                function(google) {
                    var response = {
                        data: '[[["привет мир","hello world","privet mir",""]],,"en",,[["привет мир",[4],true,false,1000,0,2,0]],[["hello world",4,[["привет мир",1000,true,false]],[[0,11]],"hello world"]],,,[["en"]],3]'
                    };
                    expect(google.onSuccessResponse(response)).to.be.eql(['привет мир']);
                }
            ]));

            it('should return empty array if nothing translate', inject(['google',
                function(google) {
                    var response = {
                        data: ''
                    };
                    expect(google.onSuccessResponse(response)).to.be.eql([]);
                }
            ]));

            it('should allow choose languages', inject(['google', '$http',
                function(google, $http) {
                    sinon.spy($http, 'get');

                    google.translate('Hello World!', 'en', 'fr');

                    expect($http.get.calledWithMatch('', {
                        params: {
                            hl: 'en',
                            tl: 'fr'
                        }
                    })).to.be.ok();
                }
            ]));

            it('should use default languages if languages not passed', inject(['google', '$http',
                function(google, $http) {
                    sinon.spy($http, 'get');

                    google.translate('Hello World!');

                    expect($http.get.calledWithMatch('', {
                        params: {
                            hl: 'en',
                            tl: 'ru'
                        }
                    })).to.be.ok();
                }
            ]));
        });
    });
})();
