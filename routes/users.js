import express from 'express';

import {
  createUser,
  deleteUser,
  getUserId,
  getUsers,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserId);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
