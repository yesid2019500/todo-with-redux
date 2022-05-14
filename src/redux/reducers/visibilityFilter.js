import { VISIVILITY_FILTER } from "../../constants"
import { SET_FILTER } from "../actionType";

const initialState = VISIVILITY_FILTER.ALL;

// REDUCER TILTRO
export const visibilityFilter = (state= initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
         return action.payload.filter
        }
           
    
        default:
            return state;
    }
}


export default visibilityFilter