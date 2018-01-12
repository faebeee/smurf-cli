'use strict';

const path = require('path');
const blessed = require('blessed');
const contrib = require('blessed-contrib');

let screen = blessed.screen();
let grid = null;


async function loadLayoutConfig(layout) {
    const configFile = require('./config/layout-' + layout);
    grid = new contrib.grid({rows: configFile.grid.rows, cols: configFile.grid.cols, screen: screen});
    let configuredWidgets = configFile.widgets;
    let widgets = [];
    for (let i = 0; i < configuredWidgets.length; i++) {
        const file = configuredWidgets[i].file;
        const layout = configuredWidgets[i].layout;
        const widget = require(path.resolve(__dirname, './config', file));
        widgets.push({
            widget, layout
        })
    }
    return widgets;
}

module.exports = async function (smurf, layout) {
    const widgets = await loadLayoutConfig(layout);
    for (let i = 0; i < widgets.length; i++) {
        const conf = widgets[i];
        conf.widget(smurf, grid, conf.layout);
    }

    setInterval(() => {
        screen.render()
    }, 1000);


    screen.key(['escape', 'q', 'C-c'], function (ch, key) {
        return process.exit(0);
    });
};

