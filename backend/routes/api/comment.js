const express = require("express");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Song, Comment, User } = require("../../db/models");



router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
  })
);

// //:id/comments
router.post(
  "/create",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, songId, body } = req.body;
    const comment = await Comment.create({
      userId,
      songId,
      body,
    });
    return res.json({ comment });
  })
);

router.put(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { body } = req.body;

    const updateComment = await Comment.findByPk(commentId);
    // console.log("______did we make it here _________");

    updateComment.update({
      body,
    });
    return res.json({ Success: "Updated" });
  })
);

router.delete(
  "/delete/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const deleteComment = await Comment.findByPk(commentId);
    await deleteComment.destroy();
    return res.json(deleteComment);
  })
);

module.exports = router;
