import {NewsData} from "data";

function NewsAllGet(req, res) {
  res.status(200)
    .send(NewsData);
}

export default NewsAllGet;
