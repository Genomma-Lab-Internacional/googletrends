const express = require('express');
const router  = express.Router();
const connection = require("../constants/connection")
const googleTrends = require("google-trends-api")
const weekNumber = require("current-week-number")
const Necesidades = require("../constants/Necesidades")

/****NECESIDADES POR REGION*****/
router.get("/necesidad0",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad0() {
    for(let i=0; i<Necesidades.Necesidades0.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades0[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades0[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad0()
})

router.get("/necesidad1",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad1() {
    for(let i=0; i<Necesidades.Necesidades1.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades1[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades1[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad1()
})

router.get("/necesidad2",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad2() {
    for(let i=0; i<Necesidades.Necesidades2.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades2[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades2[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad2()
})

router.get("/necesidad3",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad3() {
    for(let i=0; i<Necesidades.Necesidades3.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades3[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades3[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad3()
})

router.get("/necesidad4",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad4() {
    for(let i=0; i<Necesidades.Necesidades4.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades4[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades4[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad4()
})

router.get("/necesidad5",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad5() {
    for(let i=0; i<Necesidades.Necesidades5.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades5[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades5[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad5()
})

router.get("/necesidad6",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad6() {
    for(let i=0; i<Necesidades.Necesidades6.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades6[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades6[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad6()
})

router.get("/necesidad7",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad7() {
    for(let i=0; i<Necesidades.Necesidades7.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades7[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades7[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad7()
})

router.get("/necesidad8",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad8() {
    for(let i=0; i<Necesidades.Necesidades8.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades8[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades8[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad8()
})

router.get("/necesidad9",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad9() {
    for(let i=0; i<Necesidades.Necesidades9.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades9[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades9[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad9()
})


router.get("/necesidad10",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad10() {
    for(let i=0; i<Necesidades.Necesidades10.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades10[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades10[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad10()
})


router.get("/necesidad11",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad11() {
    for(let i=0; i<Necesidades.Necesidades11.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades11[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades11[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad11()
})


router.get("/necesidad12",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad12() {
    for(let i=0; i<Necesidades.Necesidades12.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades12[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades12[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad12()
})


router.get("/necesidad13",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad13() {
    for(let i=0; i<Necesidades.Necesidades13.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades13[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades13[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad13()
})


router.get("/necesidad14",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad14() {
    for(let i=0; i<Necesidades.Necesidades14.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades14[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades14[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad14()
})


router.get("/necesidad15",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad15() {
    for(let i=0; i<Necesidades.Necesidades15.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades15[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades15[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad15()
})


router.get("/necesidad16",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad16() {
    for(let i=0; i<Necesidades.Necesidades16.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades16[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades16[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad16()
})

router.get("/necesidad17",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad17() {
    for(let i=0; i<Necesidades.Necesidades17.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades17[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades17[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad17()
})

router.get("/necesidad18",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad18() {
    for(let i=0; i<Necesidades.Necesidades18.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades18[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades18[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad18()
})

router.get("/necesidad19",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad19() {
    for(let i=0; i<Necesidades.Necesidades19.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades19[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades19[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad19()
})

router.get("/necesidad20",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad20() {
    for(let i=0; i<Necesidades.Necesidades20.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades20[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades20[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad20()
})

router.get("/necesidad21",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad21() {
    for(let i=0; i<Necesidades.Necesidades21.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades21[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades21[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad21()
})

router.get("/necesidad22",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad22() {
    for(let i=0; i<Necesidades.Necesidades22.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades22[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades22[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad22()
})

router.get("/necesidad23",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad23() {
    for(let i=0; i<Necesidades.Necesidades23.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades23[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades23[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad23()
})

router.get("/necesidad24",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad24() {
    for(let i=0; i<Necesidades.Necesidades24.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades24[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades24[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad24()
})

router.get("/necesidad25",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad25() {
    for(let i=0; i<Necesidades.Necesidades25.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades25[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades25[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad25()
})

router.get("/necesidad26",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad26() {
    for(let i=0; i<Necesidades.Necesidades26.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades26[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades26[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad26()
})

router.get("/necesidad27",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad27() {
    for(let i=0; i<Necesidades.Necesidades27.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades27[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades27[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad27()
})

router.get("/necesidad28",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad28() {
    for(let i=0; i<Necesidades.Necesidades28.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades28[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades28[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad28()
})

router.get("/necesidad29",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad29() {
    for(let i=0; i<Necesidades.Necesidades29.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades29[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades29[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad29()
})

router.get("/necesidad30",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad30() {
    for(let i=0; i<Necesidades.Necesidades30.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades30[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades30[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad30()
})

router.get("/necesidad31",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad31() {
    for(let i=0; i<Necesidades.Necesidades31.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades31[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades31[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad31()
})


router.get("/necesidad32",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad32() {
    for(let i=0; i<Necesidades.Necesidades32.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades32[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades32[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad32()
})

router.get("/necesidad33",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad33() {
    for(let i=0; i<Necesidades.Necesidades33.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades33[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades33[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad33()
})

router.get("/necesidad34",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad34() {
    for(let i=0; i<Necesidades.Necesidades34.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades34[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades34[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad34()
})

router.get("/necesidad35",(req,res,next) => {
  callbackWaitsForEmptyEventLoop = false;
  
  async function necesidad35() {
    for(let i=0; i<Necesidades.Necesidades35.length; i++) {
      googleTrends.interestByRegion({keyword:Necesidades.Necesidades35[i],geo:"MX",hl:"es-419",resolution:"REGION"})
        .then( s => {
          let records = JSON.parse(s).default.geoMapData
          records.map( r => {
            let insert =  `INSERT INTO InteresPorRegionNecesidad (Estado,Necesidad,Valor,Semana,Anio) VALUES ('${r.geoName}','${Necesidades.Necesidades35[i]}',${r.value[0]},${weekNumber()},${new Date().getFullYear()})`
            connection.query(insert, (error,rows) => error ? console.log(error,"ERROR") : console.log(rows,"DONE"))
            })
          })
        .catch( e => res.status(400).json("BAD",e) )
    }
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})
  }
 necesidad35()
})
/****NECESIDADES POR REGION*****/

module.exports = router;
