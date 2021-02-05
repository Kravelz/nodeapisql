'use strict'

const config = require("../config")
const sql = require("mssql")

const getCruceros= async (req,res,next)=>{
    try {
        
        let pool = await sql.connect(config.sql)

        const list = await pool.request().query(
        `SELECT Id, NombreCrucero FROM Cruceros`
        )

        res.send(list.recordset)
    } catch (error) {
        console.log(error)
    }
}

const getCrucerosById= async (req,res,next, id=0)=>{
    try {
        console.log(req.params.id)
        let pool = await sql.connect(config.sql)

        const list = await pool.request().query(
        `SELECT Id, NombreCrucero FROM Cruceros WHERE Id = ${req.params.id}`
        )

        res.send(list.recordset)
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    getCruceros,
    getCrucerosById,
}