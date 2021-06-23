const { requireAuth } = require('../../utils/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { User, Song } = require('../../db/models')
const { check } = require('express-validator');
const { handlerValidationErrors } = require('../../utils/validation');



const validateSong = [

]

router.get('/', asyncHandler(async(req, res)=> {
    const allSongs = await Song.findAll();
    res.json(allSongs);
}))





module.exports = router
