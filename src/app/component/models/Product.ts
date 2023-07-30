export interface Product {

    id: number;
    name: string;
    price: number; // optional property with a default value of `null` if not
    image: string;
    quantity: number;
}