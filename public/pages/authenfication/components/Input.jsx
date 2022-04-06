import React from 'react'
import { TextInput } from 'react-native'

import { styles } from './../style/form'

function Input(props) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={props.setValue}
            value={props.value}
            placeholder={props.placeholder}
            secureTextEntry={props.password == true ? true : false}
        />
    )
}

export default Input;