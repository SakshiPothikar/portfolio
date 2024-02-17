const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: "./.env" })

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "dist")))

// routes
app.use("/api/v1/admin", require("./routes/userRoutes"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})
// server
mongoose.connection.once("open", () => {
    console.log("Mongo Connected")
    app.listen(process.env.PORT, console.log("Server Ruunning"))
})