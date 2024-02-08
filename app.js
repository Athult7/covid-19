const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const addrecord=require("./controller/addrecord")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://athul:athul2000@cluster0.ytkxfih.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api",addrecord)
app.listen(3004,()=>{
    console.log("running")
})