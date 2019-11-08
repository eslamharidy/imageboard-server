const {Router} = require('express')
const Image = require('./model')
const router = new Router()


//Get all images
router.get('/image', (req, res, next) => {
    const limit = req.query.limit || 5
    const offset = req.query.offset || 0
  
    Image.findAndCountAll({ limit, offset })
      .then(result => res.send({ images: result.rows, total: result.count }))
      .catch(error => next(error))
  })


  //add image
router.post('/image', (req,res,next) => {
    Image.create(req.body)
    .then(image => res.send(image))
    .catch(next)
})

  module.exports= router