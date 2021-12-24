import {ADD_COLOR} from "../action/add_color";

const initialState = {
    arrayHexColors: []
}


export const colorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLOR:
            const array = state.arrayHexColors
            array.push(action.payload);
            localStorage.setItem('arrayColors', JSON.stringify(array))
            return {...state, arrayHexColors: array};
        default:
            return {...state}
    }
}
