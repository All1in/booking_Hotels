require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")

const app = express();
/// process.env
const PORT = process.env.PORT || 4000
const MongoPassword = process.env.MongoURI
/// app.use
app.use(express.json({ extended: true }))
/// Route
app.get('/', (req, res) => {
    res.send('Hello App!!!!!!')
})

/// function start()
async function start() {
    try {
        await mongoose.connect(MongoPassword, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`This app started on port ${PORT}!`)
        })
    } catch (e) {
        console.log("Server Error happened", e.message)
    }
}

start()