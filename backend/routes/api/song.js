const { requireAuth } = require('../../utils/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Song } = require('../../db/models')
const { check } = require('express-validator');
const { handlerValidationErrors } = require('../../utils/validation');



router.get('/', asyncHandler(async(req, res)=> {

    const allSongs = await Song.findAll();
       console.log(allSongs, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      return res.json(allSongs);

}))





module.exports = router
