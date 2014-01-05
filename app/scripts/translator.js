'use strict';

angular.module('translator', [])
    .service('google', ['$http',
        function($http) {
            return {
                transformResponse: function(data) {
                    return data;
                },
                /**
                 * @desc Handle response from google translator
                 * @param {Object} response The response object
                 * @return {Array} The list of translations
                 */
                onSuccessResponse: function(response) {
                    /*jshint evil:true*/
                    if (!response.data) {
                        return [];
                    }

                    return [eval('(' + response.data + ')')[0][0][0]];
                },
                translate: function(text, from, to) {
                    var hl = from || 'en';
                    var tl = to || 'ru';
                    var sl = hl;

                    return $http.get('http://translate.google.com/translate_a/t', {
                        params: {
                            client: 't',
                            text: text,
                            hl: hl,
                            sl: sl,
                            tl: tl,
                            multires: 1,
                            ssel: 0,
                            tsel: 0,
                            sc: 1
                        },
                        transformResponse: this.transformResponse,
                    }).then(this.onSuccessResponse);
                }
            };
        }
    ]);
