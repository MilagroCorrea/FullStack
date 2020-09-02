"use strict";
exports.__esModule = true;
var administradorCanciones_1 = require("./administradorCanciones");
var administradorCanciones = new administradorCanciones_1.Lista();
console.log(administradorCanciones.getCancionesEnLista);
administradorCanciones.agregarCanciones(15, "Billie Jean", "456", "Michael Jackson");
administradorCanciones.eliminarCancion("El Tiempo No Para");
console.log("Playlist" + "/r/n" + administradorCanciones.getCancionesEnLista());
console.log("Eliminadas" + administradorCanciones.getCancionesEliminadas());
