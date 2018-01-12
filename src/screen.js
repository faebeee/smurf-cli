'use strict';

const widgetLoader = require("./widgetLoader");

module.exports = async function (smurf, layout) {
  await widgetLoader(smurf, layout);
};


