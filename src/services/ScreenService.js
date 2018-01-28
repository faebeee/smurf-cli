'use strict';

const blessed = require('blessed');
const contrib = require('blessed-contrib');

module.exports = class ScreenService {
    constructor(grid) {
        this.screen = blessed.screen();
        this.grid = new contrib.grid({rows: grid.rows, cols: grid.cols, screen: this.screen});

        this.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
            return process.exit(0);
        });


        setInterval(() => {
            this.screen.render()
        }, 1000);

    }
};
