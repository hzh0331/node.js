const express = require('express')
const router = express.Router()

// let {people} = require('../data')

const {getPeople, postPeople, putPeople, deletePeople} = require('../Controller/people')

// router.get('/', (req, res)=>{
//     res.status(200).json({success:true, data:people})
// })
//
// router.post('/', (req, res)=>{
//     const {name} = req.body
//     // const person = {name}
//     if(!name){
//         return res.status(400).json({success:false, msg:'please provide name'})
//     }
//     res.status(201).json({success:true, person:name})
// })
//
// router.put('/:id', (req, res)=>{
//     const {id} = req.params
//     const {name} = req.body
//     const person = people.find(person => person.id === Number(id))
//     if(!person){
//         return res.status(404).json({success:false, msg:'person not exist'})
//     }
//     const newPeople = people.map(person =>{
//         if (person.id === Number(id)) {
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json({success:true, data: newPeople})
// })
//
// router.delete('/:id', (req, res)=>{
//     const {id} = req.params
//     const person = people.find(person => person.id === Number(id))
//     if(!person){
//         return res.status(404).json({success:false, msg:'person not exist'})
//     }
//     const newPeople = people.filter(person => person.id !== Number(id))
//     res.status(200).json({success:true, data:newPeople})
// })

router.route('/').get(getPeople).post(postPeople)
router.route('/:id').put(putPeople).delete(deletePeople)

module.exports = router