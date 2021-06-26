const express = require('express')
const { requireAuth } = require('../../utils/auth')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const { Song , Comment, User } = require("../../db/models");



//*route location???????


// router.get('/:id', asyncHandler(async(req, res)=> {
//     const getComment = await Comment.findByPk(req.params.id, {
//         include:
//             {
//             model: Song,
//             include: User,
//         },
//     });
//     getComment ? res.json(getComment) : console.log('There are no comments for this song');
// }))

//???       ROUTE FIX    ????
router.get('/all', asyncHandler(async(req, res)=> {
  console.log('')
  const comments = await Comment.findAll();
  console.log({
    ...comments
  })
  return res.json(comments);
}));

// //:id/comments
router.post(
  "/all",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, songId, body} = req.body;
    const comment= await Song.create({
      userId,
      songId,
      body,
    });
    return res.json(comment);
  })
);


// router.put('/:id/comment/:songId', requireAuth, asyncHandler(async(req, res)=> {
//     const commentId = req.params.songId;
//     const { body } = req.body;

//     const updateComment = await Comment.findByPk(commentId)
//     updateComment.update({
//         body,
//     })
//     return res.json({Success: "Updated"})
// }));

// // //:id/comments/:songId
// router.delete('/', requireAuth, asyncHandler(async(req, res)=> {
//     const commentId = req.params.songId;
//     const deleteComment = await Comment.findByPk(commentId);
//         await deleteComment.destroy();
//     return res.json({Success: "Comment Deleted"})
// }))

module.exports = router;
