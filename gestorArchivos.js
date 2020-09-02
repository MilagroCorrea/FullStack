"use strict";
exports.__esModule = true;
exports.GestorArchivos = void 0;
var fs = require("fs");
var GestorArchivos = /** @class */ (function () {
    function GestorArchivos(ruta) {
        var lista = fs.readFileSync(ruta, 'utf8');
        this.arrayLista = new Array();
        this.arrayLista = lista.split('/r/n');
    }
    GestorArchivos.prototype.mostrarArreglo = function (arrayLista) {
        console.log('El archivo de texto contiene: ', arrayLista);
    };
    GestorArchivos.prototype.retornarArreglo = function () {
        return this.arrayLista;
    };
    return GestorArchivos;
}());
exports.GestorArchivos = GestorArchivos;
