'use strict';

module.exports = class LayoutService {
    constructor(layoutFile) {
        this.config = require(layoutFile);
    }

    get(key) {
        return this.config.widgets[key];
    }
}
