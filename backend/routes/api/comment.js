const express = require('express')
const { requireAuth } = require('../../utils/auth')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const { Song , Comment, User } = require("../../db/models")


//*route location???????
// router.get('/', asyncHandler(async(req, res)=> {
//     const comment = await Comment.findAll();
//     return res.json(comment)
// }));

router.get('/:id', asyncHandler(async(req, res)=> {
    const getComment = await Comment.findByOk(req.params.id, {
        include:
            { model: Song,
             include: User,
        },
    });
    getComment ? res.json(getComment) : console.log('There are no comments for this song');
}))

//???       ROUTE FIX    ????
router.get('/:id/comment', asyncHandler(async(req, res)=> {
    const getAllComments = await Comment.findAll({
        where: {
            songId: req.params.id},
            include: User
        });
        return res.json(getAllComments)
}));


router.post('/:id/comments', requireAuth, asyncHandler(async(req, res)=> {
    const userId = req.user.id;
    const songId = req.params.id;
    const { body } = req.body.comment;
    const comment = await Comment.create({userId, songId, body});
    const data = res.json(comment)
 return data;
}))

router.put('/:id/comments/:')
