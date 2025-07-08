import { Router } from "express";

let router = Router();

let AllData = [];


router.get("/allPosts",(req,res) => {
    res.json({
        status: "success",
        data: AllData
    })
})

router.post("/create",(req,res)=>{
    let Data = req.body;
    AllData.push(Data);
    res.json({
        status: "success",
        users: AllData
    })
})



export default router;