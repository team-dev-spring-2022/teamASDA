export const initialState = {
    page: 1,
    authScreen: 1
}

export function rootReduсer(state = initialState, action) {
    if (action.type == 'SELECTPAGE') {
        return { ...state, page: action.payload }
    }
    else if (action.type == 'SELECTAUTH') {
        return { ...state, authScreen: action.payload }
    }

    else return state
}