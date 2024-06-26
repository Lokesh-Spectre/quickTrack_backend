import express from "express";
import {current_locations} from "../db.js";
import getLocationsModel from "../models/locations.js";
const router = express.Router();

router.post("/",async (req,res)=>{
    const {sensNo,lat,long,alt,bus_no,speed} = req.body;
    current_locations[bus_no.toString()] = {sensNo, lat, long, alt, speed,timestamp:new Date().getTime()};
    const locations = await getLocationsModel();
    locations.create({lat,long,alt,bus_no}); 
    res.status(200).json({success:true,message:"successfully recorded"})
})
export default router;
