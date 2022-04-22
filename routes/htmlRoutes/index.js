const router = require('express').Router();
const path = require('path');


//Routing for all html pages

//Display notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

//Launch the landing page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

//Redirect all requests to landing page
router.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;