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
const EmpleadoCtrl = __importStar(require("../controllers/empleado.controller"));
const index_1 = require("../middlewares/index");
const router = express_1.default();
router.get('/empleados', [index_1.authJWT.verifyToken, index_1.authJWT.isGerenteTalentoHumano], EmpleadoCtrl.getEmpleados);
router.get('/empleados/sucursal/:id', [index_1.authJWT.verifyToken, index_1.authJWT.isGerenteTalentoHumano], EmpleadoCtrl.getEmpleadosBySucursal);
router.delete('/empleados/:id', [index_1.authJWT.verifyToken, index_1.authJWT.isGerenteTalentoHumano], EmpleadoCtrl.despedir);
router.get('/empleados/:id/beneficios', [index_1.authJWT.verifyToken, index_1.authJWT.isGerenteTalentoHumano], EmpleadoCtrl.getBeneficios);
router.put('/empleados/:id', [index_1.authJWT.verifyToken, index_1.authJWT.isGerenteTalentoHumano], EmpleadoCtrl.updateEmpleado);
router.post('/empleados/sucursal/:id', [index_1.authJWT.verifyToken, index_1.authJWT.isGerenteTalentoHumano], EmpleadoCtrl.createEmpleado);
router.post('/empleados/asistencias', [index_1.authJWT.verifyToken, index_1.authJWT.isGerenteTalentoHumano], EmpleadoCtrl.asistencias);
exports.default = router;
