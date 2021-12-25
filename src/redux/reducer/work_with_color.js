import {ADD_COLOR, REMOVE_COLOR, RETURN_COLORS} from "../action/actionForColor";

const initialState = {
    arrayHexColors: []
}

export const colorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLOR:
            const array = [...state.arrayHexColors]
            array.push(action.payload);
            localStorage.setItem('arrayColors', JSON.stringify(array));
            return {...state, arrayHexColors: array};
        case RETURN_COLORS:
            let colors = []
            if (localStorage.getItem('arrayColors')) {
                colors = JSON.parse(localStorage.getItem('arrayColors'));
            }
            return {...state, arrayHexColors: colors};
        case REMOVE_COLOR:
            const arrayColors = [...state.arrayHexColors]
            const index = arrayColors.indexOf(action.payload)
            if (index > -1) {
                arrayColors.splice(index, 1)
            }
            localStorage.setItem('arrayColors', JSON.stringify(arrayColors))
            return {...state, arrayHexColors: arrayColors};
        default:
            return {...state}
    }
}
