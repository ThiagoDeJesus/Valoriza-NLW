import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUsercontroller } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUsercontroller();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsService = new ListUserSendComplimentsController();
const listUserReceiveComplimentsService = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.get("/users", ensureAuthenticated, listUsersController.handle);
router.post("/users", createUserController.handle);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsService.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsService.handle
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.post("/login", authenticateUserController.handle);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

export { router };
