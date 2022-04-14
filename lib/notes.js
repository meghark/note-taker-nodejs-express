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

function deleteById(id, notesArray)
{
    console.log(`Deleting note with id ${id}`);
    let results = notesArray;

    if(id)
    {
        results = results.filter(note => note.id != id);
       
        fs.writeFileSync(path.join(__dirname, '../db/db.json'),
                    JSON.stringify(results, null, 2));
       
    }
    return results;       
}

module.exports ={validateInputData,createNewNote, findById, deleteById} ;