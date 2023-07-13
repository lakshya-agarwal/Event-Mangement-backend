const asyncHandler = require("express-async-handler");
const event = require("../models/eventModel")
//@desc get all events
//@route GET/events/getAllEvents
//@access public
const getAllEvents = asyncHandler(async(req,res) =>{
    const contacts = await event.find();
    console.log(contacts)
    res.status(200).json(contacts);
});

const createEvent = asyncHandler(async(req,res) =>{
    console.log(req.body);
    const {id,name,price,time,date} = req.body;
    if(!name){
        
        res.status(400)
        throw new Error("name is mandatory")
    }
    try {
        const eventCreated = await event.create({
            id,name,price,time,date
        })
        res.status(200).json(eventCreated);
    } catch (error) {
        console.log(error)
        res.status(200).json("error in creating event")
    }
   
   
});


module.exports = {getAllEvents,createEvent}