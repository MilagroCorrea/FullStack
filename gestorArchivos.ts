import * as fs from 'fs';

export class GestorArchivos {
    
    private arrayLista: Array<string>;
    
    constructor(ruta: string) { 
        let lista: string = fs.readFileSync(ruta, 'utf8');
        this.arrayLista = new Array();
        this.arrayLista = lista.split('/r/n');
    } 

    public mostrarArreglo (arrayLista: Array<string>) {
        console.log('El archivo de texto contiene: ', arrayLista);
    }

    public retornarArreglo () {
        return this.arrayLista;
    }

}