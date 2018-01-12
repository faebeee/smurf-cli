const contrib = require('blessed-contrib');

let line = null;
let smurf = null;

function update() {
    return smurf.getLoaderData('LoadTestLoader')
        .then((data) => {
            var meanLatencyMs = {
                title: 'mean',
                x: Object.keys(data.data.meanLatencyMs),
                y: data.data.meanLatencyMs
            };

            var maxLatencyMs = {
                title: 'max',
                x: Object.keys(data.data.maxLatencyMs),
                y: data.data.maxLatencyMs
            };

            line.setData([meanLatencyMs, maxLatencyMs])
        });
}

module.exports = function (_smurf, grid, layout) {
    smurf = _smurf
    line = grid.set(...layout, contrib.line,
        {
            style:
                {
                    line: "yellow"
                    , text: "green"
                    , baseline: "black"
                }
            , xLabelPadding: 3
            , xPadding: 5
            , showLegend: true
            , wholeNumbersOnly: false //true=do not show fraction in y axis
            , label: 'Loadtest'
        });

    setInterval(() => {
        update();
    }, 1000)
};
