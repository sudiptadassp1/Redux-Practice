/* eslint-disable no-unreachable */
import { add_to_cart } from "../Constants";


const initialState = {
    cartData: []
}
export default function cart_function(state = initialState, action){
    switch(action.type){
        case add_to_cart:
            return{
                ...state,
                cartData: action.data

            }
        break;

        default:
        return state
    }
} 


