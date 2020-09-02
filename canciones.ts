export class Single{
    private codigoProd: number;
    private nombre: string;
    private duracion: string;
    private autor:string;

    public constructor(codigoProd:number,nombre:string,duracion:string,autor:string){
        this.codigoProd=codigoProd;
        this.nombre=nombre;
        this.duracion=duracion;
        this.autor=autor;
    }

    public getNombre():string{
        return this.nombre;
    } 
    public setCodigo(nuevoCodigo:number){
       this.codigoProd= nuevoCodigo;
    } 
    public getCodigo():number{
        return this.codigoProd;
    }
    public getAutor():string{
        return this.autor;
    }
    public getDuracion():string{
        return this.duracion;
    }


}