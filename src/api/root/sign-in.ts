import {UsersData} from "data";

function SignIn(req, res) {
  const user = UsersData.find(user => user.username === req.body.username
    && user.password === req.body.password);

  if (!user) {
    res.status(400)
      .send({message: "Wrong credentials"});
    return;
  }

  res.status(200)
    .send(Object.assign({}, user, {password: null}));
}

export default SignIn;
