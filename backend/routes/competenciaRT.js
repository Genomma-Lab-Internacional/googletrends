const express = require('express');
const router  = express.Router();
const connection = require("../constants/connection")
const googleTrends = require("google-trends-api")
const weekNumber = require("current-week-number")
const Competencia = require("../constants/Competencia")

/****COMPETENCIA RELATED TOPICS*****/
router.get("/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia0[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.query}','${Competencia0[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia0()
})


router.get("/competencia1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia1() {
    for(let i=0; i<Competencia.Competencia1.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.query}','${Competencia.Competencia1[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia1()
})


router.get("/competencia2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia2() {
    for(let i=0; i<Competencia.Competencia2.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.query}','${Competencia.Competencia2[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia2()
})


router.get("/competencia3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia3() {
    for(let i=0; i<Competencia.Competencia3.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.query}','${Competencia.Competencia3[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia3()
})


router.get("/competencia4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia4() {
    for(let i=0; i<Competencia.Competencia4.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.query}','${Competencia.Competencia4[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia4()
})


router.get("/competencia5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia5() {
    for(let i=0; i<Competencia.Competencia5.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.query}','${Competencia.Competencia5[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia5()
})


router.get("/competencia6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia6() {
    for(let i=0; i<Competencia.Competencia6.length; i++) {
      googleTrends.relatedQueries({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419"})
        .then( s => {
          let records = JSON.parse(s).default.rankedList[0].rankedKeyword
          records.map( r => {
            let insert =  `INSERT INTO RTCompetencia (TopicoRelacionado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.query}','${Competencia.Competencia6[i]}',${r.value},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia6()
})
/****COMPETENCIA RELATED TOPICS*****/

module.exports = router;
