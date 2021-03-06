let {people} = require('../data')

const getPeople = (req, res)=>{
    res.status(200).json({success:true, data:people})
}

const postPeople = (req, res)=>{
    const {name} = req.body
    // const person = {name}
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name'})
    }
    res.status(201).json({success:true, person:name})
}

const putPeople = (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:'person not exist'})
    }
    const newPeople = people.map(person =>{
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data: newPeople})
}

const deletePeople = (req, res)=>{
    const {id} = req.params
    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:'person not exist'})
    }
    const newPeople = people.filter(person => person.id !== Number(id))
    res.status(200).json({success:true, data:newPeople})
}

module.exports = {
    getPeople,
    postPeople,
    putPeople,
    deletePeople
}
