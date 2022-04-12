import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { View, TouchableHighlight, Text, Button as DefaultButton } from 'react-native'

import Settings from './../svg/Settings'
import BackButton from './../svg/BackButton'

import { COLORS } from './../../../templates/style/colors'
import { styles } from './../style/profile'

function Profile() {
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
            <TouchableHighlight style={styles.button}
                onPress={() => {
                    setIsOpen(true)
                }}>

                <Settings size={30} color={COLORS().title} />
            </TouchableHighlight>
        )
    }

    function Popup() {
        async function setTheme() {
            await AsyncStorage.setItem('theme', 'dark')
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
                    <Text style={styles.title}>Profile</Text>
                    <View></View>
                </View>

                <View>
                    <View style={styles.settingsItem}>
                        <Text style={styles.settingsText}>Change Theme</Text>
                        <DefaultButton
                            title='change'
                            color={COLORS().button} 
                            onPress={() => setTheme()}/>
                    </View>

                    <View style={styles.settingsItem}>
                        <Text style={styles.settingsText}>New Login</Text>
                        <DefaultButton
                            title='change'
                            color={COLORS().button} />
                    </View>

                    <View style={styles.settingsItem}>
                        <Text style={styles.settingsText}>New Password</Text>
                        <DefaultButton
                            title='change'
                            color={COLORS().button} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Profile
