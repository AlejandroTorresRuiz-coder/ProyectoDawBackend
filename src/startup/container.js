const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../utils");
const server = require("./index");

// services
const {
  UserService,
  AuthService,
  PostService,
  LikeService,
  CommentService,
} = require("../services");

// controllers
const {
  UserController,
  AuthController,
  CommentController,
  PostController,
  LikeController,
  AdminController,
} = require("../controllers");

// routes
const {
  UserRoutes,
  AuthRoutes,
  CommentRoutes,
  PostRoutes,
  LikeRoutes,
  AdminRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User, Post, Likes, Comment } = require("../models");

// repositories
const {
  UserRepository,
  PostRepository,
  LikeRepository,
  CommentRepository,
} = require("../repositories");

const container = createContainer();

container
  .register({
    server: asClass(server).singleton(),
    config: asValue(config),
    router: asFunction(Routes).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    PostRoutes: asFunction(PostRoutes).singleton(),
    LikeRoutes: asFunction(LikeRoutes).singleton(),
    AdminRoutes: asFunction(AdminRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Post: asValue(Post),
    Likes: asValue(Likes),
    Comment: asValue(Comment),
  })
  .register({
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    PostController: asClass(PostController.bind(PostController)).singleton(),
    LikeController: asClass(LikeController.bind(LikeController)).singleton(),
    AdminController: asClass(AdminController.bind(AdminController)).singleton(),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    PostService: asClass(PostService.bind(PostService)).singleton(),
    LikeService: asClass(LikeService.bind(LikeService)).singleton(),
    CommentService: asClass(CommentService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository.bind(UserRepository)).singleton(),
    PostRepository: asClass(PostRepository.bind(PostRepository)).singleton(),
    LikeRepository: asClass(LikeRepository.bind(LikeRepository)).singleton(),
    CommentRepository: asClass(
      CommentRepository.bind(CommentRepository)
    ).singleton(),
  });

module.exports = container;
