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
const NotimartCtrl = __importStar(require("../controllers/notimart.controller"));
const middlewares_1 = require("../middlewares");
const router = express_1.default();
router.get('/notimart/productos', [middlewares_1.authJWT.verifyToken, middlewares_1.authJWT.isGerentePromos], NotimartCtrl.getProductosNotimart);
router.put('/notimart/descuento/:id', [middlewares_1.authJWT.verifyToken, middlewares_1.authJWT.isGerentePromos], NotimartCtrl.updateDescuento);
router.get('/notimart/fecha', [middlewares_1.authJWT.verifyToken, middlewares_1.authJWT.isGerentePromos], NotimartCtrl.getProximaFecha);
router.delete('/notimart/productos/:id', [middlewares_1.authJWT.verifyToken, middlewares_1.authJWT.isGerentePromos], NotimartCtrl.deleteProducto);
router.post('/notimart/productos', [middlewares_1.authJWT.verifyToken, middlewares_1.authJWT.isGerentePromos], NotimartCtrl.agregarDescuentos);
router.post('/notimart', [middlewares_1.authJWT.verifyToken, middlewares_1.authJWT.isGerentePromos], NotimartCtrl.publicar);
exports.default = router;
