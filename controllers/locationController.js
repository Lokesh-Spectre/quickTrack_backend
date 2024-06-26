import express from "express";
import {current_locations} from "../db.js";
import getLocationsModel from "../models/locations.js";

const router = express.Router();

router.get("/live/:bus_no",(req,res)=>{
    const {bus_no} = req.params;

    if (bus_no in current_locations){
        const {lat,long,alt,timestamp}= current_locations[bus_no]
        res.status(200).json({
            status:"success",
            location:{lat,long,alt},
            timestamp
        });
    } else{
        res.status(400).json({
            status:"failed", 
            message: "Invalid Bus Number"
        })
    }
})
router.get("/live/",(req,res)=>{
    const {bus_no} = req.params;
    res.status(200).json({
        status:"success",
        locations:current_locations
    });
})
router.get("/:bus_no",async (req,res)=>{
    const {bus_no} = req.params;
    const locationModel = await getLocationsModel(bus_no);
    const locations = await locationModel.findAll({where:{bus_no}});
    
    if (locations.length > 0){
        res.status(200).json({
            status:"success",
            history:locations
        });
    } else{
        res.status(400).json({
            status:"failed",
            message: "Invalid Bus Number"
        })
    }
});

export default router;