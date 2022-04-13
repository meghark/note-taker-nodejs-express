const router = require('express').Router();
const noteRoute = require('../apiRoutes/notesRoute');

router.use(noteRoute);
module.exports = router;
