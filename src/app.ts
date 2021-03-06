import express from 'express'
import empleadosRoutes from './routes/empleado.routes'
import tiendasRoutes from './routes/tiendas.routes'
import reportRoutes from './routes/reports.routes'
import proveedoresRoutes from './routes/proveedor.routes'
import clientesRoutes from './routes/cliente.routes'
import lugaresRoutes from './routes/lugar.routes'
import personasRoutes from './routes/persona.routes'
import authRoutes from './routes/auth.routes'
import productoRoutes from './routes/productos.routes'
import OrdenRoutes from './routes/orden.routes'
import notimartRoutes from './routes/notimart.routes'
import promosRoutes from './routes/promos.routes'
import pasilloRoutes from './routes/pasillo.routes'
import OrdenClienteRoutes from './routes/orden_cliente.routes'
import PagoRoutes from './routes/pago.routes'
import CajeroRoutes from './routes/cajero.routes'
import UsuarioRoutes from './routes/usuarios.routes'

const app = express();



const bodyParser = require ('body-parser');
const cors = require('cors');
const morgan = require('morgan');


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());


//Routes
app.use('/api',empleadosRoutes);
app.use('/api',tiendasRoutes);
app.use('/api',reportRoutes);
app.use('/api',proveedoresRoutes);
app.use('/api',clientesRoutes);
app.use('/api',lugaresRoutes);
app.use('/api',personasRoutes);
app.use('/api',authRoutes);
app.use('/api',productoRoutes);
app.use('/api',OrdenRoutes);
app.use('/api',notimartRoutes);
app.use('/api',promosRoutes);
app.use('/api',pasilloRoutes);
app.use('/api',OrdenClienteRoutes);
app.use('/api',PagoRoutes);
app.use('/api',CajeroRoutes);
app.use('/api',UsuarioRoutes)


export default app;