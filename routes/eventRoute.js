'use strict'

const express = require("express")
const eventController = require("../controllers/eventController")
const router = express.Router()

const {getCrucerosById, getCruceros}= eventController

router.get("/cruceros/:id",getCrucerosById )
router.get("/cruceros",getCruceros )


module.exports={
    routes:router
}