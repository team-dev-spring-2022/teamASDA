import React from 'react'
import { useSelector } from 'react-redux'

import { ScrollView } from 'react-native'

import Header from './components/Header'
import Tasklist from './components/TaskList'
import Profile from './components/Profile'
import Popup from './components/Popup'
import AddButton from './components/AddButton'

function Home() {
    const isOpen = useSelector(state => state.isOpen)

    if (!isOpen) {
        return (
            <ScrollView>
                <Header />
                <Tasklist />
                <Profile />
                <AddButton />
            </ScrollView>
        )
    }
    else return (
        <Popup />
    )
}

export default Home
