const mysql = require ("mysql")

const configDB = {
    host:"genommalab-mediosdigitales.cgkb305m9bb6.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "M3d10sh8_D1g1t4l",
    port: 3306,
    database: "mediosdigitales",
    debug:true
}

function initializeConnection(config) {
    function addDisconnectHandler(connection) {
        connection.on("err",err => {
            if(err instanceof Error) {
                if(err.code === "PROTOCOL_CONNECTION_LOST") {
                    console.log(err.stack)
                    console.log("LOST CONNECTION. RECONNECTING TO GENOMMA LAB DB...")
                    initializeConnection(connection.config)
                } else if (err.fatal) {
                    throw err
                }
            }
        })
    }
    const connection = mysql.createConnection(config)

    addDisconnectHandler(connection)

    connection.connect()
    return connection
}

const connection = initializeConnection(configDB)

module.exports = connection

