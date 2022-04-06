export const initialState = {
    page: 1,
}

export function rootReduсer(state = initialState, action) {
    if (action.type == 'SELECTPAGE') {
        return { ...state, page: action.payload }
    }

    else return state
}