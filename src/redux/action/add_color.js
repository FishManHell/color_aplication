
export const ADD_COLOR = 'ADD_COLOR'

export const addColor = (color) => {
    return {
        type: ADD_COLOR,
        payload: color
    }
}
