'use strict'

const config = require("../config")
const sql = require("mssql")

const getEvents = async () =>{
    try {
        let pool = await sql.connect(config.sql)

        const list = await pool.request().query("SELECT * FROM Fases")

        return list.recordset
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    getEvents
}