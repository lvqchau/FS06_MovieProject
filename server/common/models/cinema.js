"use strict";

const app = require("../../server/server");
const _ = require("lodash");

module.exports = function(Cinema) {
  Cinema.afterRemote("findById", async ctx => {
    console.log(ctx.result);
  });
};
