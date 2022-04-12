import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Button } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Input from './Input'

import { styles } from './../style/form'
import { COLORS } from './../../../templates/style/colors'
import { postLogin } from './../../../api/postLogin'

function Login() {
    const dispatch = useDispatch()

    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')

    function changeAuth() {
        dispatch({ type: 'SELECTAUTH', payload: 2 })
    }

    async function enterAccount() {
        postLogin(login, password).then(
            result => {
                if(result.token) {
                    AsyncStorage.setItem('token', result.token).then(
                        dispatch({ type: 'SELECTPAGE', payload: 2 })
                    )
                }
                else {
                    console.log('in correct')
                }
            }
        )

        await AsyncStorage.setItem('token', 'asdsad')
    }

    React.useEffect(() => {
        async function checkAuth() {
            const token = await AsyncStorage.getItem('token')
            if(token) {
                dispatch({ type: 'SELECTPAGE', payload: 2 })
            }
        }

        checkAuth()
    }, [])

    return (
        <View style={styles.container}>
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
                    title='Create account?'
                    onPress={() => changeAuth()}
                    color={COLORS().button} />
                <Button
                    title='Enter Account'
                    onPress={() => enterAccount()}
                    color={COLORS().button} />
            </View>
        </View>
    )
}

export default Login
