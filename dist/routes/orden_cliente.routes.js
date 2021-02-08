"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordenClienteCtrl = __importStar(require("../controllers/orden_cliente.controller"));
const middlewares_1 = require("../middlewares");
const router = express_1.default();
//Productos
//router.get('/Productos/faltantes/:id',[authJWT.verifyToken,authJWT.isGerenteGeneral], ProductoCtrl.getFaltantes);
router.post('/OrdenC', middlewares_1.authJWT.verifyToken, ordenClienteCtrl.crearOrden);
router.post('/OrdenC/Producto_Orden', ordenClienteCtrl.crearProductoOrden);
router.post('/OrdenC/Orden_estatus', ordenClienteCtrl.crearOrdenEstatus);
<<<<<<< HEAD
router.get('/OrdenC/valorpunto', ordenClienteCtrl.getValorPunto);
=======
>>>>>>> 96dcd63bfea91ab7f460f95e0e157346541586d9
exports.default = router;
