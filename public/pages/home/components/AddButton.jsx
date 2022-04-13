import React from 'react'
import { useDispatch } from 'react-redux'

import { View, TouchableHighlight } from 'react-native'

import Add from './../svg/Add'
import { styles } from './../style/popup'
import { COLORS } from '../../../templates/style/colors'

function AddButton() {
    const dispatch = useDispatch()
    
    return (
        <View style={styles.button}>
            <TouchableHighlight
                onPress={() => {
                    dispatch({ type: 'OPENPOPUP', payload: true })
                }}
            >
                <Add size={56} color={COLORS().title} />
            </TouchableHighlight>
        </View>
    )
}

export default AddButton