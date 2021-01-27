const {clientModel, visitModel, biodataModel} = require('./models')

const GET_ALL_CLIENTS = (req, res) => {
    clientModel.find()
        .then(clients => res.json(clients))
        .catch(err => res.send(err.message))
}

const GET_SPECIFIC_CLIENT = (req, res) => {
    clientModel.findById(req.params._id)
        .then(client => res.json(client))
        .catch(err => res.send(err.message))
}

const ADD_CLIENT = (req, res) => {
    const new_client = new clientModel(req.body)
    new_client.save()
        .then(client => res.json(client))
        .catch(err => res.send(err.message))
}

const GET_CLIENT_VISITS = (req, res) => {
    visitModel.find({client:req.params._id})
        .then(clients => res.json(clients))
        .catch(err => res.send(err.message))
}

const GET_SPECIFIC_VISIT = (req, res) => {
    visitModel.findById(req.params._id)
        .then(visit => res.json(visit))
        .catch(err => res.send(err.message))
}

const ADD_VISIT = (req, res) => {
    new_visit = new visitModel(req.body)
    new_visit.save()
        .then(visit => res.json(visit))
        .catch(err => res.send(err.message))
}

const GET_CLIENT_BIODATAS = (req, res) => {
    biodataModel.find({client:req.params._id})
        .then(biodata => res.json(biodata))
        .catch(err => res.send(err.message))
}

const GET_SPECIFIC_BIODATA = (req, res) => {
    biodataModel.findById(req.params._id)
        .then(biodata => res.json(biodata))
        .catch(err => res.send(err.message))
}

const ADD_BIODATA = (req, res) => {
    biodata = new biodataModel(req.body)
    biodata.save()
        .then(biodata => res.json(biodata))
        .catch(err => res.send(err.message))
}

const GET_PROFILE = async(req, res) => {
    let client
    const _id = req.params._id
    await clientModel.findById(_id)
        .then(res => {
            const {_id, name, dob, email, sex, relatives, interests} = res
            client = {
                _id,
                name,
                dob,
                email,
                sex,
                relatives, 
                interests
            }
        })
        .catch(err => console.log(err))
    await visitModel.find({client:_id})
        .then(res => {client.visits = res})
        .catch(err => console.log(err))
    await biodataModel.find({client:_id})
        .then(res => {client.biodatas = res})
        .catch(err => console.log(err))
    res.json(client)  
}

module.exports = {
    GET_ALL_CLIENTS, 
    GET_SPECIFIC_CLIENT, 
    ADD_CLIENT,
    GET_CLIENT_VISITS,
    GET_SPECIFIC_VISIT,
    ADD_VISIT,
    GET_CLIENT_BIODATAS,
    GET_SPECIFIC_BIODATA,
    ADD_BIODATA,
    GET_PROFILE
}