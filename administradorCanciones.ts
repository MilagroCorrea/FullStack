import {Single} from "./canciones";
import {GestorArchivos} from "./gestorArchivos";
import * as fs from 'fs';

export class Lista {
    private listaCanciones: Array<Single>;
    private cancionesElminadas: Array<Single>;

    public constructor() {
        this.listaCanciones = [];
        this.cancionesElminadas = [];
        this.actualizarCanciones();
    }

    private actualizarCanciones():void {
        let ruta: string = 'listaCanciones.txt';
        let miArchivo: GestorArchivos = new GestorArchivos(ruta);

        let arreglo: Array<string> = miArchivo.retornarArreglo();
        for (let i: number = 0; i < arreglo.length; i++) {
            let cancion: Array<string> = arreglo[i].split(',');  
            let cancionNueva: Single = new Single(Number(cancion[0]),cancion[1],cancion[2],cancion[3]);
            this.listaCanciones.push(cancionNueva);
        }  
    }

    public getCancionesEnLista(): Array<Single> {
        return this.listaCanciones;
    }

    public getCancionesEliminadas(): Array<Single> {
        return this.cancionesElminadas;
    }

    private buscarSingle(nombre: string): number {
        for (let i:number = 0;i < this.listaCanciones.length; i++) {
            let cancion:Single = this.listaCanciones[i];
            if (cancion.getNombre() == nombre) {
                return i;
            }
        }
        return -1;
    }

    public eliminarCancion(nombreCancion: string): void {
        let ubicacion: number = this.buscarSingle(nombreCancion);
        if (ubicacion != -1) {
            let cancion = this.listaCanciones[ubicacion];
            this.listaCanciones.splice(ubicacion,1);
            this.cancionesElminadas.push(cancion);
            this.guardarCancionesEliminadas();
        }
    }

    public agregarCanciones(codigoProd:number,nombre: string,duracion: string,autor:string ): void {
        let nuevaCancion:Single=new Single(codigoProd,nombre,duracion,autor)
        this.listaCanciones.push(nuevaCancion);
    }

    public guardarCancionesEliminadas():void{
        let datosDeCancion:string;
        if (this.cancionesElminadas.length<1){
            console.log("No hay canciones eliminadas. ");
        }else{
            for (let i = 0; i < this.cancionesElminadas.length; i++) {
                let cancion : Single = this.cancionesElminadas[i]  ;
                datosDeCancion +=Number(cancion.getCodigo) + " " + cancion.getNombre + " " +cancion.getDuracion +" " + cancion.getAutor + '\r\n';
            }
                fs.writeFile('cancionesEliminadas.txt',datosDeCancion,function(err){
                // If an error occurred, show it and return
                if(err) return console.error(err);
                // Successfully wrote to the file!
            }); 
   
    }
    }
} 