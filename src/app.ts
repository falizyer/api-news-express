import path from "path";
import server from "express";
import cors from "cors";
import bodyParser from "body-parser";

import ApiRouter from "api";

const app = server(); // create express app

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use("/api", ApiRouter)

app.use("/static", server.static(path.join(__dirname, "public", "static")));

app.get("/*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start express server on port 5000
app.listen(8080, () => {
  console.log("server started on port 8080");
});
