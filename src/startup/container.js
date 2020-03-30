const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../utils");
const server = require("./index");

// services
const { UserService,AuthService} = require("../services");

// controllers
const { UserController, AuthController } = require("../controllers");

// routes
const { UserRoutes,AuthRoutes} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User } = require("../models");

// repositories
const { UserRepository } = require("../repositories");

const container = createContainer();

container
  .register({
    server: asClass(server).singleton(),
    config: asValue(config),
    router: asFunction(Routes).singleton()
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
  })
  .register({
    User: asValue(User)
  })
  .register({
    UserController: asClass(UserController).singleton(),
    AuthController: asClass(AuthController).singleton()
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton()
  });

module.exports = container;
