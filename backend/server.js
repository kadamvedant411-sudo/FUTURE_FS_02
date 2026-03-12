const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/leadflowcrm")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/leads", require("./routes/leads"));

app.listen(5000,()=>{
console.log("LeadFlow CRM Server running on port 5000");
});