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

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await covidmodel.find(input)
    res.json(data)
})

module.exports=router