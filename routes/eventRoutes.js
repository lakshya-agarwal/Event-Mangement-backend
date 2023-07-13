const express = require("express");
const router = express.Router();
const {getAllEvents,createEvent} = require("../controllers/eventController");
const validateToken = require("../middleware/validTokenHandler");

router.get("/getAllEvents",validateToken,getAllEvents );

router.post("/createEvent",validateToken,createEvent);

router.route("/getEvent/:id").get((req,res) =>{
    res.status(200).json({message:`get the events ${req.params.id}`});
});

module.exports = router;