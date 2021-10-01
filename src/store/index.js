import { observable, makeObservable, action } from "mobx"
import axios from 'axios';

const baseUrl = 'https://ezeapi-prod-copy.herokuapp.com/api/v1'

class ProductStore {
    products = [];
    searchQuery = ''

    constructor() {
        makeObservable(this, {
            products: observable,
            searchQuery: observable,
            loadProducts: action,
        });
    }
    
    // /sell-request/in-stock?sort=new&limit=20&page=1&minPrice=0&maxPrice=2500&storageSizeString=&conditionString=&category=Smartphones&brand=Apple,Samsung,Google,Huawei,LG,Motorola,OnePlus
    // https://ezeapi-prod-copy.herokuapp.com/api/v1/products/price?category=Smartphones&brand=Apple&sort=lowestAsk&hoursInterval=24&limit=20&page=1

    loadProducts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/sell-request/in-stock?sort=new&limit=20&page=1&minPrice=0&maxPrice=2500&storageSizeString=&conditionString=&category=Smartphones&brand=Apple,Samsung,Google,Huawei,LG,Motorola,OnePlus`);
            if (response.status === 200) {
                const { data } = response.data?.data || {}
                this.products = data
            } 
        } catch (error) {
           //
        }
    }
}
  
export const store = new ProductStore();