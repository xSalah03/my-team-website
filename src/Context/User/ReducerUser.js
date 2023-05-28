import { ADD_CARD } from "../Type";


export const ReducerUser = (state,action) =>{
    switch (action.type) {
        case ADD_CARD:
            return [...state,action.payload];
    
        default:
            break;
    }
}
