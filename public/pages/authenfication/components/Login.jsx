import React, { useState } from 'react'
import { View, Button } from 'react-native'

import Input from './Input'

import { styles } from './../style/form'
import { COLORS } from './../../../templates/style/colors'

function Login() {
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')

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
                    color={COLORS().button} />
                <Button
                    title='Enter Account'
                    color={COLORS().button} />
            </View>
        </View>
    )
}

export default Login