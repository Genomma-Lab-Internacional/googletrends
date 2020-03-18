const express = require('express');
const router  = express.Router();
const connection = require("../constants/connection")
const googleTrends = require("google-trends-api")
const Necesidades = require("../constants/Necesidades")

/*****NECESIDAD INTEREST OVER TIME*****/
router.get("/necesidades0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades0() {
    for(let i=0; i<Necesidades.Necesidades0.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades0[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades0()
})

router.get("/necesidades1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades1() {
    for(let i=0; i<Necesidades.Necesidades1.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades1[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades1()
})

router.get("/necesidades2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades2() {
    for(let i=0; i<Necesidades.Necesidades2.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades2[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades2()
})

router.get("/necesidades3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades3() {
    for(let i=0; i<Necesidades.Necesidades3.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades3[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades3()
})


router.get("/necesidades4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades4() {
    for(let i=0; i<Necesidades.Necesidades4.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades4[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades4()
})

router.get("/necesidades5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades5() {
    for(let i=0; i<Necesidades.Necesidades5.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades5[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades5()
})


router.get("/necesidades6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades6() {
    for(let i=0; i<Necesidades.Necesidades6.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades6[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades6()
})


router.get("/necesidades7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades7() {
    for(let i=0; i<Necesidades.Necesidades7.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades7[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades7[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades7()
})

router.get("/necesidades8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades8() {
    for(let i=0; i<Necesidades.Necesidades8.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades8[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades8[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades8()
})

router.get("/necesidades9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades9() {
    for(let i=0; i<Necesidades.Necesidades9.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades9[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades9[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades9()
})

router.get("/necesidades10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades10() {
    for(let i=0; i<Necesidades.Necesidades10.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades10[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades10[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades10()
})

router.get("/necesidades11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades11() {
    for(let i=0; i<Necesidades.Necesidades11.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades11[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades11[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades11()
})

router.get("/necesidades12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades12() {
    for(let i=0; i<Necesidades.Necesidades12.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades12[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades12[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades12()
})


router.get("/necesidades13",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades13() {
    for(let i=0; i<Necesidades.Necesidades13.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades13[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades13[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades13()
})

router.get("/necesidades14",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades14() {
    for(let i=0; i<Necesidades.Necesidades14.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades14[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades14[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades14()
})

router.get("/necesidades15",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades15() {
    for(let i=0; i<Necesidades.Necesidades15.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades15[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades15[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades15()
})

router.get("/necesidades16",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades16() {
    for(let i=0; i<Necesidades.Necesidades16.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades16[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades16[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades16()
})


router.get("/necesidades17",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades17() {
    for(let i=0; i<Necesidades.Necesidades17.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades17[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades17[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades17()
})

router.get("/necesidades18",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades18() {
    for(let i=0; i<Necesidades.Necesidades18.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades18[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades18[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades18()
})

router.get("/necesidades19",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades19() {
    for(let i=0; i<Necesidades.Necesidades19.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades19[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades19[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades19()
})

router.get("/necesidades20",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades20() {
    for(let i=0; i<Necesidades.Necesidades20.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades20[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades20[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades20()
})

router.get("/necesidades21",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades21() {
    for(let i=0; i<Necesidades.Necesidades21.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades21[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades21[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades21()
})

router.get("/necesidades22",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades22() {
    for(let i=0; i<Necesidades.Necesidades22.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades22[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades22[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades22()
})


router.get("/necesidades23",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades23() {
    for(let i=0; i<Necesidades.Necesidades23.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades23[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades23[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades23()
})

router.get("/necesidades24",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades24() {
    for(let i=0; i<Necesidades.Necesidades24.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades24[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades24[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades24()
})

router.get("/necesidades25",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades25() {
    for(let i=0; i<Necesidades.Necesidades25.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades25[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades25[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades25()
})

router.get("/necesidades26",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades26() {
    for(let i=0; i<Necesidades.Necesidades26.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades26[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades26[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades26()
})

router.get("/necesidades27",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades27() {
    for(let i=0; i<Necesidades.Necesidades27.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades27[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades27[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades27()
})

router.get("/necesidades28",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades28() {
    for(let i=0; i<Necesidades.Necesidades28.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades28[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades28[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades28()
})

router.get("/necesidades29",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades29() {
    for(let i=0; i<Necesidades.Necesidades29.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades29[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades29[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades29()
})

router.get("/necesidades30",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades30() {
    for(let i=0; i<Necesidades.Necesidades30.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades30[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades30[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades30()
})

router.get("/necesidades31",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades31() {
    for(let i=0; i<Necesidades.Necesidades31.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades31[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades31[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades31()
})

router.get("/necesidades32",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades32() {
    for(let i=0; i<Necesidades.Necesidades32.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades32[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades32[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades32()
})

router.get("/necesidades33",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades33() {
    for(let i=0; i<Necesidades.Necesidades33.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades33[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades33[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades33()
})

router.get("/necesidades34",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades34() {
    for(let i=0; i<Necesidades.Necesidades34.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades34[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades34[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades34()
})

router.get("/necesidades35",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidades35() {
    for(let i=0; i<Necesidades.Necesidades35.length; i++) {
      googleTrends.interestOverTime({keyword:Necesidades.Necesidades35[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.timelineData
          records.map( r => {
            let day = r.formattedAxisTime.split(" ")[0]
            let month = r.formattedAxisTime.split(" ")[1]
            let year = r.formattedAxisTime.split(" ")[2]
            if(month === "ene.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "feb.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "mar.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }else if (month === "abr.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "may.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jun.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "jul.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "ago.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "sep.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "oct.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "nov.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else if (month === "dic.") {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            } else {
              let insert =  `INSERT INTO IOTNecesidad (Tiempo,Necesidad,Valor) VALUES ('${year}-01-${day}','${Necesidades.Necesidades35[i]}',${r.value[0]})`
              connection.query(insert, (e,r) => e ? console.log(e,"ERROR") : console.log(r,"DONE"))
            }
            })
          })
        .catch( e => res.status(400).json(e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
necesidades35()
})
/*****NECESIDAD INTEREST OVER TIME*****/

module.exports = router;
