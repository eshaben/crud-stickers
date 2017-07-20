const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js')

router.get('/', function(req, res){
  knex('sticker')
  .then(sticker => {
    res.json(sticker)
  })
})

router.get('/:id', (req, res)=> {
  let id = req.params.id;
  knex('sticker')
  .where('id', id).first()
  .then(sticker=>{
    res.json(sticker)
  })
})

router.post('/', (req,res)=> {
  let post = req.body;
  knex('sticker').insert(post)
    .returning('*')
    .then(sticker => {
      res.json(sticker[0])
    })
})

router.put('/:id', (req,res)=> {
  let id = req.params.id;
  let edit = req.body;
  knex('sticker').where('id', id)
    .update(edit)
    .returning('*')
    .then(edited => {
      res.json(edited[0])
    })
})

router.delete('/:id', (req, res) => {
	let id = req.params.id;
	knex('sticker')
		.where('id', id).del()
		.then(deleted => {
			res.json({
				"deleted": true
		})
	});
})

module.exports = router;
