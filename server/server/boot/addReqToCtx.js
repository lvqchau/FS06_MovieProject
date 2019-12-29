const _ = require("lodash");

module.exports = app => {
  app
    .remotes()
    .phases.addBefore("invoke", "add-request-to-options")
    .use(function(ctx, next) {
      _.set(ctx, "args.options.req", ctx.req);
      _.set(ctx, "args.options.res", ctx.res);
      next();
    });
};
