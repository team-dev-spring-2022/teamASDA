import React, { useState } from 'react'
import { View, Button, Alert } from 'react-native'

import Input from './Input'

import { styles } from './../style/form'
import { COLORS } from './../../../templates/style/colors'
import { postRegistration } from './../../../api/postRegistration'

const Registration = () => {
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    function registration() {
        postRegistration(name, mail, login, password).then(response => Alert.alert(response))
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Name'
                value={name}
                setValue={setName} />

            <Input
                placeholder='Email'
                value={mail}
                setValue={setMail} />

            <Input
                placeholder='Login'
                value={login}
                setValue={setLogin} />


            <Input
                placeholder='Password'
                password={true}
                value={password}
                setValue={setPassword} />

            <View style={styles.footer}>
                <Button
                    title='have account?'
                    color={COLORS().button} />
                <Button
                    title='Create account'
                    onPress={() => registration()}
                    color={COLORS().button} />
            </View>
        </View>
    )
}

export default Registration