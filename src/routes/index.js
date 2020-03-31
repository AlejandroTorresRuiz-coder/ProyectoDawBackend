const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");

const { CheckAuthMidleware,NotFoundMiddleware } = require('../middlewares');

module.exports = function({UserRoutes,AuthRoutes}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    
  // Model path
  apiRoutes.use('/user', [CheckAuthMidleware],UserRoutes);
  apiRoutes.use('/auth',AuthRoutes);

  // Base api path
  router.use('/v1/api', apiRoutes);

  router.use(NotFoundMiddleware);

  return router;
};
