"use strict";
exports.__esModule = true;
exports.Single = void 0;
var Single = /** @class */ (function () {
    function Single(codigoProd, nombre, duracion, autor) {
        this.codigoProd = codigoProd;
        this.nombre = nombre;
        this.duracion = duracion;
        this.autor = autor;
    }
    Single.prototype.getNombre = function () {
        return this.nombre;
    };
    Single.prototype.setCodigo = function (nuevoCodigo) {
        this.codigoProd = nuevoCodigo;
    };
    Single.prototype.getCodigo = function () {
        return this.codigoProd;
    };
    Single.prototype.getAutor = function () {
        return this.autor;
    };
    Single.prototype.getDuracion = function () {
        return this.duracion;
    };
    return Single;
}());
exports.Single = Single;
