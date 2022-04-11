import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { styles } from './style/form'

import Registration from './components/Registration'
import Login from './components/Login'

function Authenfication() {
    const authScreen = useSelector(state => state.authScreen)

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Authorization</Text>
            </View>
            {
                authScreen == 1 
                ? <Login />
                : <Registration />
            }
        </View>
    )
}

export default Authenfication
