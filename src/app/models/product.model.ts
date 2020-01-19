
export class Product {

    id: number;
    img: string;
    title: string;
    text: string;

    constructor(product: any) {
       this.id = product.id || 0;
       this.img = product.img || '';
       this.title = product.title || '';
       this.text = product.text || '';
    }
}
