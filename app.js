#! /usr/bin/env node
'use strict';
const argv = require('yargs').argv;

const screen = require('./src/screen');
const SmurfFetch = require('smurf-fetch');
const ora = require('ora');

const SETTINGS = {};
const CONFIG = {
    PSILoader: {},
    GeoIPLoader: {}
};


const smurf = new SmurfFetch(SETTINGS);
const URL = argv.url;

const spinner = ora(`Creating report for ${URL}`).start();

smurf.start(URL, ['PSILoader', 'LightHouseLoader', 'GeoIPLoader', 'CSSStatsLoader', 'LoadTestLoader'])
    .then(() => {
        spinner.stop();
        return screen(smurf, 'sm');
    })
    .catch((e) => {
        console.error(e);
        return process.exit(0);
    });
