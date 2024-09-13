import users from '../Users/users.json'
import express from "express";

const router = express.Router();

router.route("/all?")
  .get((req, res) => {
    res.send(users);
  });

router.route("/posts?")
.get((req, res) => {
    res.send(users.map((user) => user.posts));
});

router.route("/:uuid")
  .get((req, res) => {
    res.send(users.find((user) => user.uuid));
  });
export default router;



