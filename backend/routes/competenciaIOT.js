const express = require('express');
const router  = express.Router();
const connection = require("../constants/connection")
const googleTrends = require("google-trends-api")
const Competencia = require("../constants/Competencia")

/****COMPETENCIA INTEREST OVER TIME*****/
router.get("/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
   async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.interestOverTime({keyword:Competencia.Competencia0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-01-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-02-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-03-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-04-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-05-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-06-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-07-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-08-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-09-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-10-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-11-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-12-${day}','${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES (${null},'${Competencia.Competencia0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
          })
        })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia0()
})


router.get("/competencia1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia1() {
    for(let i=0; i<Competencia.Competencia1.length; i++) {
      googleTrends.interestOverTime({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-01-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-02-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-03-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-04-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-05-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-06-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-07-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-08-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-09-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-10-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-11-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-12-${day}','${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES (${null},'${Competencia.Competencia1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia1()
})


router.get("/competencia2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia2() {
    for(let i=0; i<Competencia.Competencia2.length; i++) {
      googleTrends.interestOverTime({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-01-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-02-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-03-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-04-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-05-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-06-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-07-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-08-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-09-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-10-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-11-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-12-${day}','${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES (${null},'${Competencia.Competencia2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia2()
})


router.get("/competencia3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia3() {
    for(let i=0; i<Competencia.Competencia3.length; i++) {
      googleTrends.interestOverTime({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-01-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-02-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-03-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-04-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-05-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-06-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-07-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-08-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-09-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-10-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-11-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-12-${day}','${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES (${null},'${Competencia.Competencia3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia3()
})


router.get("/competencia4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia4() {
    for(let i=0; i<Competencia.Competencia4.length; i++) {
      googleTrends.interestOverTime({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-01-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-02-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-03-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-04-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-05-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-06-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-07-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-08-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-09-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-10-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-11-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-12-${day}','${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES (${null},'${Competencia.Competencia4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia4()
})


router.get("/competencia5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia5() {
    for(let i=0; i<Competencia.Competencia5.length; i++) {
      googleTrends.interestOverTime({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-01-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-02-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-03-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-04-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-05-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-06-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-07-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-08-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-09-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-10-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-11-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-12-${day}','${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES (${null},'${Competencia.Competencia5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia5()
})


router.get("/competencia6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia6() {
    for(let i=0; i<Competencia.Competencia6.length; i++) {
      googleTrends.interestOverTime({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-01-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-02-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-03-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-04-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-05-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-06-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-07-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-08-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-09-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-10-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-11-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES ('${year}-12-${day}','${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTCompetencia (Tiempo,MrcNombreCompetencia,Valor) VALUES (${null},'${Competencia.Competencia6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
competencia6()
})
/****COMPETENCIA INTEREST OVER TIME*****/

module.exports = router;
