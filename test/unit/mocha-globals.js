(function(global, sinon) {
    'use strict';

    /* global beforeEach, afterEach */
    beforeEach(function() {
        global.sinon = sinon.sandbox.create();
    });

    afterEach(function() {
        global.sinon.restore();
    });
}(this, this.sinon));
