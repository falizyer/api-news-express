import server from "express";

import UserGet from "api/users/user.get";

const router = server.Router();

router.get("/:id", UserGet);

export default router;
