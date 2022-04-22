const router = require('express').Router();
const noteRoute = require('../apiRoutes/notesRoute');

//route all api calls
router.use(noteRoute);
module.exports = router;
