"use strict";
exports.__esModule = true;
exports.Lista = void 0;
var canciones_1 = require("./canciones");
var gestorArchivos_1 = require("./gestorArchivos");
var fs = require("fs");
var Lista = /** @class */ (function () {
    function Lista() {
        this.listaCanciones = [];
        this.cancionesElminadas = [];
        this.actualizarCanciones();
    }
    Lista.prototype.actualizarCanciones = function () {
        var ruta = 'listaCanciones.txt';
        var miArchivo = new gestorArchivos_1.GestorArchivos(ruta);
        var arreglo = miArchivo.retornarArreglo();
        for (var i = 0; i < arreglo.length; i++) {
            var cancion = arreglo[i].split(',');
            var cancionNueva = new canciones_1.Single(Number(cancion[0]), cancion[1], cancion[2], cancion[3]);
            this.listaCanciones.push(cancionNueva);
        }
    };
    Lista.prototype.getCancionesEnLista = function () {
        return this.listaCanciones;
    };
    Lista.prototype.getCancionesEliminadas = function () {
        return this.cancionesElminadas;
    };
    Lista.prototype.buscarSingle = function (nombre) {
        for (var i = 0; i < this.listaCanciones.length; i++) {
            var cancion = this.listaCanciones[i];
            if (cancion.getNombre() == nombre) {
                return i;
            }
        }
        return -1;
    };
    Lista.prototype.eliminarCancion = function (nombreCancion) {
        var ubicacion = this.buscarSingle(nombreCancion);
        if (ubicacion != -1) {
            var cancion = this.listaCanciones[ubicacion];
            this.listaCanciones.splice(ubicacion, 1);
            this.cancionesElminadas.push(cancion);
            this.guardarCancionesEliminadas();
        }
    };
    Lista.prototype.agregarCanciones = function (codigoProd, nombre, duracion, autor) {
        var nuevaCancion = new canciones_1.Single(codigoProd, nombre, duracion, autor);
        this.listaCanciones.push(nuevaCancion);
    };
    Lista.prototype.guardarCancionesEliminadas = function () {
        var datosDeCancion;
        if (this.cancionesElminadas.length < 1) {
            console.log("No hay canciones eliminadas. ");
        }
        else {
            for (var i = 0; i < this.cancionesElminadas.length; i++) {
                var cancion = this.cancionesElminadas[i];
                datosDeCancion += Number(cancion.getCodigo) + " " + cancion.getNombre + " " + cancion.getDuracion + " " + cancion.getAutor + '\r\n';
            }
            fs.writeFile('cancionesEliminadas.txt', datosDeCancion, function (err) {
                // If an error occurred, show it and return
                if (err)
                    return console.error(err);
                // Successfully wrote to the file!
            });
        }
    };
    return Lista;
}());
exports.Lista = Lista;
