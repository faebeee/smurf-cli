const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('CSSStatsLoader')
        .then((data) => {
            var table = grid.set(...layout, contrib.table,
                {
                    keys: true
                    , fg: 'white'
                    , selectedFg: 'white'
                    , selectedBg: 'blue'
                    , interactive: true
                    , label: 'CSS Size'
                    , width: '30%'
                    , border: {type: "line", fg: "cyan"}
                    , columnSpacing: 10 //in chars
                    , columnWidth: [25, 6] /*in chars*/
                });

            const files = data.data;
            let keys = Object.keys(files);
            let titles = ['File', 'Kb'];
            let values = [];

            for (let i = 0; i < keys.length; i++) {
                values.push([keys[i], Math.round(files[keys[i]].size / 1024)]);
            }
            table.focus();
            table.setData(
                {
                    headers:titles,
                    data:values
                })

        })
};
