const express=require("express")
const covidmodel=require("../model/covidmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let covid=new covidmodel(data)
    let result=await covid.save()
    res.json({
        status:"success"
    })
})

module.exports=router