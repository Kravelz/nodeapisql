'use strict'

const dotenv = require("dotenv")
const assert = require("assert")
dotenv.config()

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASS, SQL_DATABASE, SQL_SERVER, SQL_ENCRYPT } = process.env

const sqlEncrypt = process.env.ENCRYPT === "true"

assert(PORT, "PORT is required")
assert(HOST, "HOST is required")

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASS,
        options:{
            encrypt:sqlEncrypt,
            enableArithAbort:true
        }
    }
}
