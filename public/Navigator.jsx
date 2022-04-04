import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { createStore } from 'redux'

import { rootReduсer, initialState } from './redux/rootReducer'

import Home from './pages/home/Home'
import Authenfication from './pages/authenfication/Authenfication'

const store = createStore(rootReduсer, initialState)

function Navigator() {
    return (
        <Provider store={store}>
            <Navigate />
        </Provider>
    )
}

function Navigate() {
    const page = useSelector(state => state.page)

    if (page == 1) {
        return <Authenfication />
    }
    else if (page == 2) {
        return <Home />
    }
    else return <></> //not found or error
}

export default Navigator