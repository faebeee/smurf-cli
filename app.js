'use strict';

const Promise = require('bluebird');
const SmurfFetch = require('smurf-fetch');
const blessed = require('blessed');
const contrib = require('blessed-contrib');
const PSIResponseBytes = require('./src/PSIResponseBytes');
const PSIResources = require('./src/PSIResources');
const PSISpeed = require('./src/PSISpeed');

const SETTINGS = {};
const CONFIG = {
    PSILoader: {}
};
const smurf = new SmurfFetch(SETTINGS);

let screen = blessed.screen();
let grid = new contrib.grid({rows: 6, cols: 6, screen: screen});

smurf.start('http://fabs.io', ['PSILoader'])
    .then(() => {
        return PSIResponseBytes(smurf, grid, screen);
    })
    .then( () => {
        return PSISpeed(smurf, grid, screen);
    })
    .then( () => {
            return PSIResources(smurf, grid, screen)
    })
    .catch(e => {
        throw e;
    })


setInterval(() => {
    screen.render()
}, 1000);

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});

screen.render();
