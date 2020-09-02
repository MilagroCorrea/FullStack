import {Lista} from "./administradorCanciones";

let administradorCanciones= new Lista();
console.log(administradorCanciones.getCancionesEnLista);

administradorCanciones.agregarCanciones(15, "Billie Jean", "456", "Michael Jackson");

administradorCanciones.eliminarCancion("El Tiempo No Para");

console.log("Playlist"+ administradorCanciones.getCancionesEnLista());

console.log("Eliminadas" + administradorCanciones.getCancionesEliminadas());



