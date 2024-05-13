export class Product {

    constructor(
        public sku: string,
        public name: string,
        public description: string,
        public unitPrice: number,
        public imagUrl: string,
        public active:boolean,
        public unitInStock:number,
        public dateCreated: Date,
        public lastUpdated: Date
    ){
        
    }
}
