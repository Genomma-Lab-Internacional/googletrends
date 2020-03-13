const AWS = require('aws-sdk')
const googleTrends = require("google-trends-api")
const weekNumber =require("current-week-number")
const connection = require ("../backend/constants/connection")
AWS.config.update({region: 'us-east-1'});


module.exports.interestByRegionMrcNombre0 = (event,context,callback) => {
  console.log(event.body)
  context.callbackWaitsForEmptyEventLoop = false;
  let values=[]
  let insert = `INSERT INTO InteresPorRegionMarca (Estado,MrcNombre,Valor,SOutSemana,SOutAnio) VALUES ?`;

  const MrcNombre0 = [
    "ALLIVIAX",
    "TEATRICAL",
    "ENGLISH LEATHER",
    "NIKZON",
    "SHOT B",
    "PURIFIQ"
  ]

  console.log(MrcNombre0)

  for(let i=0; i<MrcNombre0.length; i++) {
    googleTrends.interestByRegion({keyword:MrcNombre0[i],geo:"MX",hl:"es-419",resolution:"REGION"})
      .then( s => {
        console.log(event)
        let records = JSON.parse(s).default.geoMapData
        records.map( r => {
          values.push([r.geoName,MrcNombre0[i],r.value[0],weekNumber(),new Date().getFullYear()])
        })
      
      console.log(values)
        
      connection.query(insert,[values],(error,rows) => {
        if(error) {
          console.log(error,"ERROR")
          callback({
            statusCode:500,
            body:JSON.stringify(error),
            headers:{
              "Access-Control-Allow-Origin":"*"
            }
          });
        } else {
          console.log(rows,"DONE")
          callback(null,{
            statusCode:200,
            body:JSON.stringify(body.table),
            headers:{
              "Access-Control-Allow-Origin":"*"
            }
          })
        }
      })

      })
      .catch( e => console.log(e) )
  }
}
