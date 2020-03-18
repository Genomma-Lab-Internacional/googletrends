const express = require('express');
const router  = express.Router();
const connection = require("../constants/connection")
const googleTrends = require("google-trends-api")
const weekNumber = require("current-week-number")
const Competencia = require("../constants/Competencia")

/*****COMPETENCIA POR REGION*****/
router.get("/competencia0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function competencia0() {
    for(let i=0; i<Competencia.Competencia0.length; i++) {
      googleTrends.interestByRegion({keyword:Competencia.Competencia0[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.geoName}','${Competencia.Competencia0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
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
      googleTrends.interestByRegion({keyword:Competencia.Competencia1[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.geoName}','${Competencia.Competencia1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
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
      googleTrends.interestByRegion({keyword:Competencia.Competencia2[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.geoName}','${Competencia.Competencia2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
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
      googleTrends.interestByRegion({keyword:Competencia.Competencia3[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.geoName}','${Competencia.Competencia3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
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
      googleTrends.interestByRegion({keyword:Competencia.Competencia4[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.geoName}','${Competencia.Competencia4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
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
      googleTrends.interestByRegion({keyword:Competencia.Competencia5[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.geoName}','${Competencia.Competencia5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
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
      googleTrends.interestByRegion({keyword:Competencia.Competencia6[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionCompetencia (Estado,MrcNombreCompetencia,Valor,Semana,Anio) VALUES ('${r.geoName}','${Competencia.Competencia6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 competencia6()
})
/****COMPETENCIA POR REGION*****/

module.exports = router;
