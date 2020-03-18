const googleTrends = require("google-trends-api")
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const weekNumber =require("current-week-number")




// const MrcNombre0 = require("./Constants/MrcNombre0")
// const MrcNombre1 = require("./Constants/MrcNombre1")
// const MrcNombre2 = require("./Constants/MrcNombre2")
// const MrcNombre3 = require("./Constants/MrcNombre3")
// const MrcNombre4 = require("./Constants/MrcNombre4")
// const MrcNombre5 = require("./Constants/MrcNombre5")
// const MrcNombre6 = require("./Constants/MrcNombre6")
// const MrcNombre7 = require("./Constants/MrcNombre7")
// const MrcNombre8 = require("./Constants/MrcNombre8")
// const MrcNombre9 = require("./Constants/MrcNombre9")
// const MrcNombre10 = require("./Constants/MrcNombre10")
// const MrcNombre11 = require("./Constants/MrcNombre11")
// const MrcNombre12 = require("./Constants/MrcNombre12")
// const LinNombre = require("./Constants/LinNombre")
// const ProNombre = require ("./Constants/ProNombre")
// let csvfile = []
// let values = []


// const Necesidades1 = require("./Constants/Necesidades1")
// const Necesidades2 = require("./Constants/Necesidades2")
// const Necesidades3 = require("./Constants/Necesidades3")
// const Necesidades4 = require("./Constants/Necesidades4")
// const Necesidades5 = require("./Constants/Necesidades5")
// const Necesidades6 = require("./Constants/Necesidades6")
// const Necesidades7 = require("./Constants/Necesidades7")
// const Necesidades8 = require("./Constants/Necesidades8")
// const Necesidades9 = require("./Constants/Necesidades9")




  // for(let j=0; j<MrcNombre0.length; j++) {
    
  //   const csvWriter = createCsvWriter({
  //     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/test.csv`,
  //     header: [
  //       {id:"date",title:"Fecha"},
  //       {id:"week",title:"Semana"},
  //       {id:"interestByRegion",title:"Interes Por Region"},
  //       {id:'state',title:'Estado'},
  //       {id:'value',title:'Valor'}
  //     ]
  //   })
  
  //   googleTrends.interestByRegion({keyword:MrcNombre0[j],geo:"MX",hl:"es-419",resolution:"REGION"})
  //     .then( s => {
  //       let records = JSON.parse(s).default.geoMapData
  //       records.map( r => {
  //         csvfile.push({interestByRegion:r.geoName,state:MrcNombre0[j],value:r.value[0],date:new Date().toString(),week:weekNumber()})
  //         csvWriter.writeRecords(csvfile)
  //           .then( ( ) => console.log(`...Done Bitch!!!`) )
  //           .catch( ( ) => console.log("...NOT Done Bitch!!!") )
  //       })
  //     })
  //     .catch( e => console.log(e) )
  // }

  // for(let j=0; j<MrcNombre12.length; j++) {
  //   const csvWriter = createCsvWriter({
  //     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/MrcNombre12city.csv`,
  //     header: [
  //       {id:"date",title:"Fecha"},
  //       {id:"week",title:"Semana"},
  //       {id:"interestByRegion",title:"Interes Por Region"},
  //       {id:'state',title:'Estado'},
  //       {id:'value',title:'Valor'}
  //     ]
  //   })
  
  //   googleTrends.interestByRegion({keyword:MrcNombre12[j],geo:"MX",hl:"es-419",resolution:"CITY"})
  //     .then( s => {
  //       let records = JSON.parse(s).default.geoMapData
  //       records.map( r => {
  //         csvfile.push({interestByRegion:r.geoName,state:MrcNombre12[j],value:r.value[0],date:new Date().toString(),week:weekNumber()})
  //         csvWriter.writeRecords(csvfile)
  //           .then( ( ) => console.log(`...Done Bitch!!!`) )
  //           .catch( ( ) => console.log("...NOT Done Bitch!!!") )
  //       })
  //     })
  //     .catch( e => console.log(e) )
  // }

// for(let j=0; j<Necesidades1.length; j++) {
//   const csvWriter = createCsvWriter({
//     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/Necesidades1.csv`,
//     header: [
//       {id:"date",title:"Fecha"},
//       {id:"week",title:"Semana"},
//       {id:"state",title:"Estado"},
//       {id:'needs',title:'Necesidad'},
//       {id:'value',title:'Valor'}
//     ]
//   })

//   googleTrends.interestByRegion({keyword:Necesidades1[j],geo:"MX",hl:"es-419",resolution:"REGION"})
//     .then( s => {
//       let records = JSON.parse(s).default.geoMapData
//       records.map( r => {
//         csvfile.push({state:r.geoName,needs:Necesidades1[j],value:r.value[0],date:new Date().toString(),week:weekNumber()})
//         csvWriter.writeRecords(csvfile)
//           .then( ( ) => console.log(`...Done Bitch!!!`) )
//           .catch( ( ) => console.log("...NOT Done Bitch!!!") )
//       })
//     })
//     .catch( e => console.log(e) )
//   }


  // for(let j=0; j<Necesidades9.length; j++) {
  //   const csvWriter = createCsvWriter({
  //     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/Necesidades9City.csv`,
  //     header: [
  //       {id:"date",title:"Fecha"},
  //       {id:"week",title:"Semana"},
  //       {id:"state",title:"Municipio/Alcaldía"},
  //       {id:'needs',title:'Necesidad'},
  //       {id:'value',title:'Valor'}
  //     ]
  //   })
  
  //   googleTrends.interestByRegion({keyword:Necesidades9[j],geo:"MX",hl:"es-419",resolution:"CITY"})
  //     .then( s => {
  //       let records = JSON.parse(s).default.geoMapData
  //       records.map( r => {
  //         csvfile.push({state:r.geoName,needs:Necesidades9[j],value:r.value[0],date:new Date().toString(),week:weekNumber()})
  //         csvWriter.writeRecords(csvfile)
  //           .then( ( ) => console.log(`...Done Bitch!!!`) )
  //           .catch( ( ) => console.log("...NOT Done Bitch!!!") )
  //       })
  //     })
  //     .catch( e => console.log(e) )
  //   }



  // for(let j=0; j<Necesidades9.length; j++) {
  //   const csvWriter = createCsvWriter({
  //     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/Necesidades9RQ.csv`,
  //     header: [
  //       {id:"date",title:"Fecha"},
  //       {id:"week",title:"Semana"},
  //       {id:'relatedQuery',title:'Busqueda Relacionada'},
  //       {id:'value',title:'Valor'},
  //       {id:"needs",title:"Necesidades"}
  //     ]
  //   })

  // googleTrends.relatedQueries({keyword: Necesidades9[j], geo: "MX",hl:"es-419"})
  //   .then( s => {
  //     let records = JSON.parse(s).default.rankedList[0].rankedKeyword
  //     records.map( r => {
  //       csvfile.push({relatedQuery:r.query,value:r.value,date:new Date().toString(),week:weekNumber(),needs:Necesidades9[j]})
  //       csvWriter.writeRecords(csvfile)
  //         .then( ( ) => console.log(`...Done Bitch!!!`) )
  //         .catch( ( ) => console.log("...NOT Done Bitch!!!") )
  //     })
  //   })
    
  //   .catch( e => console.log(e) )
  // }





  // for(let j=0; j<Necesidades9.length; j++) {
  //   const csvWriter = createCsvWriter({
  //     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/Necesidades9RT.csv`,
  //     header: [
  //       {id:"date",title:"Fecha"},
  //       {id:"week",title:"Semana"},
  //       {id:'relatedTopic',title:'Topico Relacionada'},
  //       {id:'value',title:'Valor'},
  //       {id:"brand",title:"MrcNombre"}
  //     ]
  //   })

  // googleTrends.relatedTopics({keyword: Necesidades9[j], geo: "MX",hl:"es-419"})
  //   .then( s => {
  //     let records = JSON.parse(s).default.rankedList[0].rankedKeyword
  //     records.map( r => {
  //       csvfile.push({relatedTopic:r.topic.title,value:r.value,date:new Date().toString(),week:weekNumber(),brand:Necesidades9[j]})
  //       csvWriter.writeRecords(csvfile)
  //         .then( ( ) => console.log(`...Done Bitch!!!`) )
  //         .catch( ( ) => console.log("...NOT Done Bitch!!!") )
  //     })
  //   })
    
  //   .catch( e => console.log(e) )
  // }









// ESTADO
// googleTrends.interestByRegion({keyword:"POMADA DE LA CAMPANA",geo:"MX",hl:"es-419",resolution:"REGION"})
//   .then( s => {
//     records.map( r => {console.log(r.geoName,r.value[0])})
//    console.log(records)
//   })
//   .catch(e=>console.log(e))

//CIUDAD
// googleTrends.interestByRegion({keyword:"Lomecan",geo:"MX",hl:"es-419",resolution:"CITY"})
//   .then(s=>console.log(JSON.parse(s).default.geoMapData))
//   .catch(e=>console.log(e))


// googleTrends.dailyTrends({trendDate: Date.now(), geo: 'MX',hl:"es-419"})
//   .then(s=>console.log(JSON.parse(s).default.trendingSearchesDays[0].trendingSearches[0]))
//   .catch(e=>console.log(e))


// Consultas Relacionadas, que busca la gente
// googleTrends.relatedQueries({keyword: "Lomecan", geo: "MX",hl:"es-419"})
//   .then(s=>console.log(JSON.parse(s).default.rankedList[0].rankedKeyword))
//   .catch(e=>console.log(e))

googleTrends.relatedTopics({keyword: "Lomecan", geo: "MX",hl:"es-419"})
  .then(s=>console.log(JSON.parse(s).default.rankedList[0].rankedKeyword))
  .catch(e=>console.log(e))

// googleTrends.interestOverTime({keyword:"Lomecan",geo:"MX",hl:"es-419"})
//   .then( s => {
//     let records = JSON.parse(s).default.timelineData
//     records.map( r => {
//       if (r.formattedAxisTime.split(" ")[1] === "ene.") {
//         console.log(r.formattedAxisTime.split(" ")[0]+"-"+01+"-"+r.formattedAxisTime.split(" ")[2] )
//       }  else {
//         console.log(r.formattedAxisTime.split(" ")[0]+"-"+02+"-"+r.formattedAxisTime.split(" ")[2] )
//       }
//     })
    


//   })
//   .catch(e=>console.log(e))



  // for(let j=0; j<MrcNombre12.length; j++) {
  //   const csvWriter = createCsvWriter({
  //     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/MrcNombre12TL.csv`,
  //     header: [
  //       {id:"date",title:"Fecha"},
  //       {id:'time',title:'Tiempo'},
  //       {id:'value',title:'Valor'},
  //       {id:"brand",title:"MrcNombre"}
  //     ]
  //   })

  // googleTrends.interestOverTime({keyword:MrcNombre12[j],geo:"MX",hl:"es-419"})
  //   .then( s => {
  //     let records = JSON.parse(s).default.timelineData
  //     records.map( r => {
  //       csvfile.push({time:r.formattedAxisTime,value:r.value[0],date:new Date().toString(),brand:MrcNombre12[j]})
  //       csvWriter.writeRecords(csvfile)
  //         .then( ( ) => console.log(`...Done Bitch!!!`) )
  //         .catch( ( ) => console.log("...NOT Done Bitch!!!") )
  //     })
  //   })
    
  //   .catch( e => console.log(e) )
  // }


  // for(let j=0; j<Necesidades9.length; j++) {
  //   const csvWriter = createCsvWriter({
  //     path: `/Users/cortizp/Documents/datascience/mediosdigital/googletrends/Necesidades9TL.csv`,
  //     header: [
  //       {id:"date",title:"Fecha"},
  //       {id:'time',title:'Tiempo'},
  //       {id:'value',title:'Valor'},
  //       {id:"brand",title:"MrcNombre"}
  //     ]
  //   })

  // googleTrends.interestOverTime({keyword:Necesidades9[j],geo:"MX",hl:"es-419"})
  //   .then( s => {
  //     let records = JSON.parse(s).default.timelineData
  //     records.map( r => {
  //       csvfile.push({time:r.formattedAxisTime,value:r.value[0],date:new Date().toString(),brand:Necesidades9[j]})
  //       csvWriter.writeRecords(csvfile)
  //         .then( ( ) => console.log(`...Done Bitch!!!`) )
  //         .catch( ( ) => console.log("...NOT Done Bitch!!!") )
  //     })
  //   })
    
  //   .catch( e => console.log(e) )
  // }





