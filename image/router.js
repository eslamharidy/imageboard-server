const {Router} = require('express')
const Image = require('./model')
const router = new Router()
const auth = require ('../auth/middleware')


//Get all images
router.get('/image', (req, res, next) => {
    const limit = req.query.limit || 20
    const offset = req.query.offset || 0
  
    Image.findAndCountAll({ limit, offset, order: [
      ['updatedAt', 'DESC']
  ] })
      .then(result => res.send({ images: result.rows, total: result.count }))
      .catch(error => next(error))
  })


  //add image
router.post('/image',auth, (req,res,next) => {
    Image.create(req.body)
    .then(image => res.send(image))
    .catch(next)
})

  module.exports= router