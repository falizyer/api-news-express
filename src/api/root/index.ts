import server from "express";

import SignIn from "api/root/sign-in";

const router = server.Router();

router.post("/sign-in", SignIn);

export default router;
