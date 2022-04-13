const fs = require('fs');
const path = require('path');


function validateInputData(note)
{
    if(!note.title)
    {
        return false;
    }
    
    if(!note.text)
    {
        return false;
    }
    return true;
}

function createNewNote(note, notesArray)
{
    notesArray.push(note);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
                    JSON.stringify(notesArray, null, 2));

    return note;
}

function findById(id , notesArray)
{
    console.log(id);
    let result = notesArray.filter(note => note.id == id)[0];
    return result;
    
}

module.exports ={validateInputData,createNewNote, findById} ;