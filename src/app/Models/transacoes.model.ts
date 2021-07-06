export class Transacoes{
    constructor(
        public nome: string,
        public valor: number | string,
        public date?: Date | string,
        public id?:number,
    ){

    }
} 