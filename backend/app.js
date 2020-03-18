require('dotenv').config()

const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index')
const mrcNombreRegion = require("./routes/mrcNombreRegion")
const mrcNombreCiudad = require("./routes/mrcNombreCiudad")
const necesidadRegion = require("./routes/necesidadRegion")
const necesidadCiudad = require("./routes/necesidadCiudad")
const competenciaRegion = require("./routes/competenciaRegion")
const competenciaCiudad = require("./routes/competenciaCiudad")
const mrcNombreRQ = require("./routes/mrcNombreRQ")
const necesidadRQ = require("./routes/necesidadRQ")
const competenciaRQ = require("./routes/competenciaRQ")
const mrcNombreRT = require("./routes/mrcNombreRT")
const necesidadRT = require("./routes/necesidadRT")
const competenciaRT = require("./routes/competenciaRT")
const mrcNombreIOT = require("./routes/mrcNombreIOT")
const necesidadIOT = require("./routes/necesidadIOT")
const competenciaIOT = require("./routes/competenciaIOT")

app.use('/', index)
app.use("/mrcnombreregion",mrcNombreRegion)
app.use("/mrcnombreciudad",mrcNombreCiudad)
app.use("/necesidadregion",necesidadRegion)
app.use("/necesidadciudad",necesidadCiudad)
app.use("/competenciaregion",competenciaRegion)
app.use("/competenciaciudad",competenciaCiudad)
app.use("/mrcnombrerq",mrcNombreRQ)
app.use("/necesidadrq",necesidadRQ)
app.use("/competenciarq",competenciaRQ)
app.use("/mrcnombrert",mrcNombreRT)
app.use("/necesidadrt",necesidadRT)
app.use("/competenciart",competenciaRT)
app.use("/mrcnombreiot",mrcNombreIOT)
app.use("/necesidadiot",necesidadIOT)
app.use("/competenciaiot",competenciaIOT)


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
