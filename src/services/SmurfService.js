'use strict';

const SmurfFetch = require('smurf-fetch');
const ora = require('ora');

const SETTINGS = {};
const CONFIG = {
    PSILoader: {},
    GeoIPLoader: {}
};

module.exports = class SmurfService {
    constructor(loaders) {
        this.smurf = new SmurfFetch(SETTINGS);
        this.spinner = null;
        this.loaders = loaders;
    }

    start(url) {
        this.spinner = ora(`Creating report for ${url}`).start();
        return this.smurf.start(url, this.loaders)
            .then(() => {
                this.spinner.stop();
            });
    }
};
