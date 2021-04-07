import server from "express";

import RootRouter from "api/root";
import UsersRouter from "api/users";
import NewsRouter from "api/news";

const router = server.Router();

router.use(RootRouter);

router.use("/users", UsersRouter);
router.use("/news", NewsRouter);

export default router;
