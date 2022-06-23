const express = require("express"); // require express framework
const router = express.Router();
const FILEPATH = "./src/backend/json/todo.json"; // require exact path when Node.js process is started
const readJson = require("../controllers/jsonReader");
const writeJson = require("../controllers/jsonWriter");
const findJsonById = require("../controllers/jsonFinder");

// An endpoint to get all list of todo
router.get('/', function(req, res){
    // To read todo JSON file
    readJson(FILEPATH, (err, todo) => {
        if (err){
            console.log(err)
            return
        }
        try {
            res.status(200).send(todo);
        }
        catch (err) {
            return res.status(500).send(err); 
        }
    });
})

// An endpoint to update status based on ID
router.patch('/:id', (req, res) => {
    // First to read todo.json file
    readJson(FILEPATH, (err, todo) => {
        if (err){
            console.log(err)
            return
        }
        try {
            //Find index of specific object using findIndex method.
            const objIndex = findJsonById(todo, req);
            // If the index is -1 then return an error to client
            if (objIndex<0){
                return res.status(404).send("Todo not found");
            }
            //Update object's status property.
            todo[objIndex].status = req.body.status;
            // To write updated todo to JSON file
            writeJson(FILEPATH,todo);
            return res.status(200).send(todo[objIndex]);   
        }
        catch (err) {
            return res.status(500).send(err); 
        }
  });
})

module.exports = router;