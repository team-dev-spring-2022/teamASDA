import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './../style/header'

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.date}>9 марта 2022</Text>
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>5 complete, </Text>
                <Text style={styles.statusText}>5 incomplete</Text>
            </View>
            <View style={styles.separator}></View>
        </View>
    )
}

export default Header