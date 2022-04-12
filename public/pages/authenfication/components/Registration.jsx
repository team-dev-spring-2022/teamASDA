import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Button, Alert } from 'react-native'

import Input from './Input'

import { styles } from './../style/form'
import { COLORS } from './../../../templates/style/colors'
import { postRegistration } from './../../../api/postRegistration'

const Registration = () => {
    const dispatch = useDispatch()

    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    async function registration() {
        const message = await postRegistration(name, mail, login, password)

        Alert.alert('Info', message)
        console.log(message)
    }

    function changeAuth() {
        dispatch({ type: 'SELECTAUTH', payload: 1 })
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
                    onPress={() => changeAuth()}
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
