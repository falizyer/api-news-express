import {UsersData} from "data";

function UserGet(req, res) {
  const token = req.header("x-root-token");


  if (!token) {
    return res.status(401).json({msg: "No token"});
  }

  const user = UsersData.find(user => user.id === req.params.id);

  if (token !== user.xAuthToken) {
    return res.status(404).json({msg: "Wrong token"});
  }

  if (user) {
    delete user.password;
    delete user.xAuthToken;
  }

  res.status(200)
    .send(user);
}

export default UserGet;
