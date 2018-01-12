const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('LightHouseLoader')
        .then((data) => {
            const markdown = grid.set(...layout, contrib.markdown);
            const domeNodes = data.data['dom-size'].displayValue;
            const fmp = data.data['first-meaningful-paint'].displayValue;

            markdown.setMarkdown(`# Overview 
                \n DOM ${domeNodes}
                \n FMP ${fmp}
            `);
        });
};
