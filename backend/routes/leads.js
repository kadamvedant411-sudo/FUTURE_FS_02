const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// Create Lead
router.post("/", async (req,res)=>{
try{
const lead = new Lead(req.body);
const savedLead = await lead.save();
res.json(savedLead);
}
catch(err){
res.status(500).json(err);
}
});

// Get all leads
router.get("/", async (req,res)=>{
const leads = await Lead.find().sort({createdAt:-1});
res.json(leads);
});

// Update Lead Status
router.put("/:id", async (req,res)=>{
const updated = await Lead.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);
res.json(updated);
});

// Delete Lead
router.delete("/:id", async (req,res)=>{
await Lead.findByIdAndDelete(req.params.id);
res.json("Lead Deleted");
});

module.exports = router;