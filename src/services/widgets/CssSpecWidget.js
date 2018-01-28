'use strict';

const contrib = require('blessed-contrib');

module.exports = class CssSpecWidget {
    constructor(smurfService, screenService, layoutProvider) {
        smurfService.smurf.getLoaderData('CSSAnalyzeLoader')
            .then((data) => {
                var table = screenService.grid.set(...layoutProvider.get('CssSpecWidget'), contrib.table,
                    {
                        keys: true
                        , fg: 'white'
                        , selectedFg: 'white'
                        , selectedBg: 'blue'
                        , interactive: true
                        , label: 'CSS Spec'
                        , border: {type: "line", fg: "cyan"}
                        //, columnSpacing: 10 //in chars
                        , columnWidth: [10, 5, 4, 4] /*in chars*/

                    });

                const files = data.data;
                let keys = Object.keys(files);
                let titles = ['file', 'id', 'class' , 'tag'];
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
    }
};
