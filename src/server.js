import express from 'express';
import morgan from 'morgan';
import router from './routers/report_routes.js';
import routerR from './routers/respuesta_routes.js'

const app = express()
app.use(morgan('dev'))

app.set('port',process.env.port || 3000) //variable setiada por el servidor, como no esta subida en la nube lo subira al puerto 3000

//middlewares
//app.use(express.json())


//rutas
app.get('/',(req,res)=>res.send("Server on"))

app.use('/api/v1/',router)
//-------------------------------
app.use('/api/v1/',routerR)

//exportar la variable
export default app;