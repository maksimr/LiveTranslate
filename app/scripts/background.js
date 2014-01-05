'use strict';

angular.module('runApp', ['chrome', 'translator']).run(['omnibox', 'google',
    function(omnibox, google) {
        omnibox.onInputChanged.addListener(function(text, suggest) {

            google.translate(text).then(function(translations) {
                return translations.map(function(translate) {
                    return {
                        content: translate,
                        description: translate
                    };
                });
            }).then(suggest);

        });

        omnibox.onInputEntered.addListener(function( /*text*/ ) {});
    }
]);

angular.bootstrap(null, ['runApp']);
