import express from "express"
import cors from "cors"
import "dotenv/config"

import PostRoute from "./Routes/PostRoute.js"


let app = express();
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello from the backend")
})

app.use("/api/post",PostRoute);


let PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
