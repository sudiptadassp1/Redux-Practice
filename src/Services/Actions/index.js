import { add_to_cart } from '../Constants'
export const addToCart = (data) =>{
    return{
        type: add_to_cart,
        data: data
    }
}