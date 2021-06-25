const { requireAuth } = require('../../utils/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Song } = require('../../db/models')

const { handlerValidationErrors } = require('../../utils/validation');



router.get('/', asyncHandler(async(req, res)=> {
    const allSongs = await Song.findAll();
       console.log(allSongs)
      return res.json(allSongs);

}))

router.post('/', asyncHandler(async(req, res)=> {
    const {userId, title, link, artist} = req.body;
    const song = await Song.create({
        userId,
        title,
        url: link,
        artist
     })
    return res.json(song)

}))




module.exports = router
