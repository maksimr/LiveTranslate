/* global describe, it, expect, beforeEach, module, inject */

/**
 * module -> anugular.mock.module
 * inject -> anugular.mock.inject
 */
(function() {
    'use strict';

    describe('chrome extension API', function() {
        beforeEach(module('chrome'));
        beforeEach(module('chromeMock'));

        it('should replace real chrome API on mock', inject(['omnibox',
            function(omnibox) {
                expect(omnibox).to.be.ok();
            }
        ]));
    });
})();
