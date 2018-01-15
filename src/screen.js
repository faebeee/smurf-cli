'use strict';

const blessed = require('blessed');

const widgetLoader = require("./widgetLoader");

module.exports = async function (smurf, layout) {

    let screen = blessed.screen();
    await widgetLoader(smurf, layout, screen);

    setInterval(() => {
        screen.render()
    }, 1000);


    screen.key(['escape', 'q', 'C-c'], function (ch, key) {
        return process.exit(0);
    });
};


