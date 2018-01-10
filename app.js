#! /usr/bin/env node
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
let grid = new contrib.grid({rows: 4, cols: 6, screen: screen});


async function loadWidget(widgets){
    for(let i = 0; i < widgets.length; i++){
        const widget = widgets[i];
        await widget(smurf, grid, screen);
    }
}

smurf.start('http://fabs.io', ['PSILoader', 'LightHouseLoader'])
    .then(() => {
        smurf.getLoaderData('LightHouseLoader')
            .then( (data) => {
                console.log(data);
            })
        return loadWidget([
            PSIResponseBytes,
            PSIResources,
            PSISpeed,
        ]);
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
