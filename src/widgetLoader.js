'use strict';

const path = require('path');
const contrib = require('blessed-contrib');

let grid = null;


async function loadLayoutConfig(layout, screen) {
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

module.exports = async function (smurf, layout, screen) {
    const widgets = await loadLayoutConfig(layout, screen);
    for (let i = 0; i < widgets.length; i++) {
        const conf = widgets[i];
        conf.widget(smurf, grid, conf.layout);
    }


};

