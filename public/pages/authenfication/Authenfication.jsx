import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './style/form'

import Registration from './components/Registration'

function Authenfication() {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>Authorization</Text>
            </View>
            <Registration />

        </>
    )
}

export default Authenfication