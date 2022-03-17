import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from './components/Header'
import Tasklist from './components/TaskList'

function Home() {
    return (
        <View>
            <Header />
            <Tasklist />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Home