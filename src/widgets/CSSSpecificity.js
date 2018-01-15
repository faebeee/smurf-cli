'use strict';

const contrib = require('blessed-contrib');

module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('CSSAnalyzeLoader')
        .then((data) => {
            var table = grid.set(...layout, contrib.table,
                {
                    keys: true
                    , fg: 'white'
                    , selectedFg: 'white'
                    , selectedBg: 'blue'
                    , interactive: true
                    , label: 'CSS Spec'
                    , width: '30%'
                    , border: {type: "line", fg: "cyan"}
                    , columnSpacing: 10 //in chars
                    , columnWidth: [25, 6] /*in chars*/
                });

            const files = data.data;
            let keys = Object.keys(files);
            let titles = ['class', 'id', 'tag'];
            let values = [];

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                let metrics = files[key].metrics;
                values.push([keys[i], metrics.specificityClassAvg, metrics.specificityIdAvg, metrics.specificityTagAvg]);
            }

            table.focus();
            table.setData({
                headers: titles,
                data: values
            });
        });
};
