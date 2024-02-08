const mongoose=require("mongoose")
const covidschema=new mongoose.Schema({
    patientname:String,
    phonenumber:String,
    symptoms:String,
    status:String
    
})

module.exports=mongoose.model("covid",covidschema)