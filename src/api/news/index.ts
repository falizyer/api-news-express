import server from "express";

import NewsAllGet from "api/news/news.all.get";

const router = server.Router();

router.post("/news", NewsAllGet);

export default router;
