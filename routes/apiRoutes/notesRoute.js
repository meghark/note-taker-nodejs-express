const router  = require('express').Router();
let notes = require('../../db/db.json');
const {validateInputData,createNewNote, findById, deleteById} = require('../../lib/notes');
const uuid = require("uuid");


//Return all saved notes
router.get('/notes', (req, res)=>{
    let results = notes;
    res.json(results);     
})

//Return a selected note using unique id for each note.
router.get('/notes/:id', (req, res) => {
    let results = findById(req.params.id, notes);

    if(results)
    {
        res.json(results);
    }
    else{
        res.sendStatus(400);
    }
})

//Add a new note. Boy of the request will inlcude a note title and text.
//To create unique id for each newly added note use uuid. This generates a 128 bit guid.
router.post('/notes', (req, res) => {
    console.log(req.body);
    let result = validateInputData(req.body);
    req.body.id = uuid.v4();

    if(result)
    {
        createNewNote(req.body, notes);
        res.json(req.body);
    }
    else{
        res.status(400).send('Invalid note entry');
    }

})

//Delete a note
router.delete('/notes/:id', (req, res) => {

    let results = deleteById(req.params.id, notes);
    notes = results;
    res.json(results);
})

module.exports = router;