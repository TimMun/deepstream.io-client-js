"use strict";
var client_1 = require("./client");
var C = require("./constants");
var client = function (url, options) {
    return new client_1.Client(url, options);
};
module.exports = Object.assign(client, {
    CONNECTION_STATE: C.CONNECTION_STATE,
    C: C,
    EVENT: C.EVENT,
    deepstream: client
});
