const express = require("express");
const router = express.Router();

// Import all controller functions
const blogController = require("../controllers/blogController");
const studentsController = require("../controllers/studentsController");




// Create Blog router paths
router.get('/blog/create',blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);


// mongooges students router Create
router.post('/insertStudent', studentsController.InsertStudent);
router.get('/readStudent', studentsController.ReadStudent);
router.post('/UpdateStudent/:id', studentsController.UpdateStudent);
router.get('/DeleteStudent/:id', studentsController.DeleteStudent);




// Export Router
module.exports = router;