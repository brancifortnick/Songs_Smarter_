const { requireAuth } = require('../../utils/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Song, Comment, User } = require('../../db/models')
const { handlerValidationErrors } = require('../../utils/validation');



router.get('/', asyncHandler(async(req, res)=> {
    const allSongs = await Song.findAll();
       console.log(allSongs)
      return res.json(allSongs);

}))


router.get('/:id', asyncHandler(async(req, res)=>{

    const song = await Song.findByPk(req.params.id);
    // console.log(song, '___________________________________')
    if(song){

        return res.json(song)
    }
}))

router.post('/', asyncHandler, (async(req, res)=> {
    console.log("________inapi_______________")
    const {userId, title, link, artist} = req.body;
    const song = await Song.create({
        userId,
        title,
        url: link,
        artist
     })
    return res.json(song)

}))


// router.post(
//   "/",
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const { userId, songId, body} = req.body;
//     const comment= await Song.create({
//       userId,
//       songId,
//       body,
//     });
//     return res.json(comment);
//   })
// );


// router.put('/update/:id', requireAuth, asyncHandler(async(req, res)=> {
//     const commentId = req.params.songId;
//     const { body } = req.body;

//     const updateComment = await Comment.findByPk(commentId)
//     updateComment.update({
//         body,
//     })
//     return res.json({Success: "Updated"})
// }));

// // // //:id/comments/:songId
router.delete('/delete/:id', requireAuth, asyncHandler(async(req, res)=> {
    const songId = req.params.id
    const deletedSong = await Song.findByPk(songId);
    if(deletedSong){
        await deletedSong.destroy();
        return res.json(deletedSong)
    }
}))





module.exports = router
