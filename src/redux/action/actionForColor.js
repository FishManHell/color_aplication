
export const ADD_COLOR = 'ADD_COLOR'
export const RETURN_COLORS = 'RETURN_COLORS'
export const REMOVE_COLOR = 'REMOVE_COLOR'

export const addColor = color => {
    return {
        type: ADD_COLOR,
        payload: color
    }
}

export const returnColors = colors => {
    return {
        type: RETURN_COLORS,
        payload: colors
    }
}

export const removeColor = color => {
    return {
        type: REMOVE_COLOR,
        payload: color
    }
}
