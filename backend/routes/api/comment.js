const express = require('express')
const { requireAuth } = require('../../utils/auth')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const { Song , Comment, User } = require("../../db/models");
const comment = require( '../../db/models/comment' );


//*route location???????
// router.get('/', asyncHandler(async(req, res)=> {
//     const comment = await Comment.findAll();
//     return res.json(comment)
// }));

router.get('/', asyncHandler(async(req, res)=> {
    const getComment = await Comment.findByPk(req.params.id, {
        include:
            {
            model: Song,
            include: User,
        },
    });
    getComment ? res.json(getComment) : console.log('There are no comments for this song');
}))

//???       ROUTE FIX    ????
router.get('/', asyncHandler(async(req, res)=> {
  //:id/comment
  const getAllComments = await Comment.findAll({
    where: {
      songId: req.params.id,
    },
    include: User,
  });
  return res.json(getAllComments);
}));

//:id/comments
router.post('/', requireAuth, asyncHandler(async(req, res)=> {
    const userId = req.user.id;
    const songId = req.params.id;
    const { body } = req.body.comment;
    const comment = await Comment.create({userId, songId, body});
    const data = res.json(comment)
 return data;
}))

//:id/comments/:songId
router.put('/', requireAuth, asyncHandler(async(req, res)=> {
    const commentId= req.params.songId;
    const { body } = req.body;

    const updateComment = await Comment.findByPk(commentId)
    comment.update({
        body,
    })
    return res.json({Success: "Updated"})
}));

//:id/comments/:songId
router.delete('/', requireAuth, asyncHandler(async(req, res)=> {
    const commentId = req.params.songId;
    const deleteComment = await Comment.findByPk(commentId);
        await deleteComment.destroy();
    return res.json({Success: "Comment Deleted"})
}))

module.exports = router;
