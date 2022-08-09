import axios from 'axios'

const PRODUCTS_REST_API_URL = 'https://ecommerce-app-s0570716.herokuapp.com/api/v2/products';
//const PRODUCTS_REST_API_URL = 'http://localhost:8080/api/v2/products';

class ProductService {

    // get all products
    getProducts(){
        return axios.get(PRODUCTS_REST_API_URL);
    }
    
    // get a specific product by id
    getProductsById(Id){
        return axios.get(PRODUCTS_REST_API_URL + '/' + Id)
    }

    // get products by category
    getProductsByCategory(Category) {
        return axios.get(PRODUCTS_REST_API_URL + '/' + Category);
    }
}

export default new ProductService();