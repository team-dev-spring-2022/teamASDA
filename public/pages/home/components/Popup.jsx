import React, { useState } from 'react'
import { View, TouchableHighlight, Text, TextInput, Button as DefultButton, Alert } from 'react-native'

import Add from './../svg/Add'
import BackButton from './../svg/BackButton'

import { COLORS } from './../../../templates/style/colors'
import { styles } from './../style/popup'
import { postTask } from '../../../api/postTask'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Popup() {
    const [isOpen, setIsOpen] = React.useState(false)

    if (isOpen) {
        return (
            <Popup />
        )
    }
    else return (
        <Button />
    )

    function Button() {
        return (
            <View style={styles.button}>
                <TouchableHighlight
                    onPress={() => {
                        setIsOpen(true)
                    }}
                >
                    <Add size={56} color={COLORS().title} />
                </TouchableHighlight>
            </View>
        )
    }

    function Popup() {
        const [title, setTitle] = useState('')
        const [time, setTime] = useState('')

        async function sendTask() {
            const token = await AsyncStorage.getItem('token')
            await postTask(title, time, token).then(res => {
                Alert.alert('Info', res.message)
            })
        }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight
                        onPress={() => {
                            setIsOpen(false)
                        }}>

                        <BackButton size={20} color={COLORS().title} />
                    </TouchableHighlight>
                    <Text style={styles.title}>Create Task</Text>
                    <View></View>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitle}
                        value={title}
                        placeholder='Task Title'
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setTime}
                        value={time}
                        placeholder='Task Time'
                    />

                    <DefultButton
                        onPress={() => sendTask()}
                        title='Create task'
                        color={COLORS().button}
                    />
                </View>
            </View>
        )
    }
}

export default Popup