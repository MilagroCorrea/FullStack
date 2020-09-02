import {Lista} from './administradorCanciones';

export interface IInventario{
    buscarCancion(codigoProd:number):void;
    quitarCancion(codigoProd:number):void;
    listarCancion(codigoProd:number):void;
    agregarCanciones(cancionNueva:Lista):void;
} 

//Todavía no comprendo como implementar interface.
