import React, { useState } from 'react'
import { View, CheckBox, Text } from 'react-native'
import { styles } from './../style/taskList'

function Tasklist() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Incompleted</Text>
            <IncompletedTask />
            <IncompletedTask />
            <IncompletedTask />
            <Text style={styles.titleDisabled}>Completed</Text>
            <CompletedTask />
            <CompletedTask />
        </View>
    )
}

function CompletedTask() {
    const [isSelected, setSelection] = useState(true)

    return (
        <View style={styles.listElement}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />

            <Text style={styles.listTextDisabled}>Разработать дизайн-макет</Text>
        </View>
    )
}

function IncompletedTask() {
    const [isSelected, setSelection] = useState(false)

    return (
        <View style={styles.listElement}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />

            <View>
                <Text style={styles.listText}>Разработать дизайн-макет</Text>
                <Text style={styles.listTextDate}>До 20.20.20</Text>
            </View>
        </View>
    )
}

export default Tasklist
