import axios from 'axios'

// const PRODUCTS_REST_API_URL = 'https://ecommerce-app-s0570716.herokuapp.com/api/v2/products';
const PRODUCTS_REST_API_URL = 'http://localhost:8080/api/v2/products';

class ProductService {

    getProducts(){
        return axios.get(PRODUCTS_REST_API_URL);
    }
    
    getProductsById(Id){
        return axios.get(PRODUCTS_REST_API_URL + '/' + Id)
    }

    getProductsByCategory(Category) {
        return axios.get(PRODUCTS_REST_API_URL + '/' + Category);
    }
}

export default new ProductService();