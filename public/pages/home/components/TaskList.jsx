import React, { useState } from 'react'
import { View, CheckBox, Text } from 'react-native'
import { styles } from './../style/taskList'
import { getData } from './../../../api/getData'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Tasklist() {
    const [tasks, setTasks] = React.useState([{}])

    async function createList() {
        const token = await AsyncStorage.getItem('token')

        await getData(token).then(res => {
            setTasks(res.tasks)
        })
    }

    React.useEffect(() => {
        createList()

    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Incompleted</Text>
            {
                tasks.map(element => {
                    if (element.status == 'inProccess') {
                        return (
                            <IncompletedTask text={element.content} date={element.date} key={Math.random()} />
                        )
                    }
                })
            }

            {
                tasks.map(element => {
                    if (element.status == 'completed') {
                        return (
                            <CompletedTask text={element.content} key={Math.random()} />
                        )
                    }
                })
            }
            <Text style={styles.titleDisabled}>Completed</Text>
        </View>
    )
}

function CompletedTask(props) {
    const [isSelected, setSelection] = useState(true)

    return (
        <View style={styles.listElement}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />

            <Text style={styles.listTextDisabled}>{props.text}</Text>
        </View>
    )
}

function IncompletedTask(props) {
    const [isSelected, setSelection] = useState(false)

    return (
        <View style={styles.listElement}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />

            <View>
                <Text style={styles.listText}>{props.text}</Text>
                <Text style={styles.listTextDate}>{props.date}</Text>
            </View>
        </View>
    )
}

export default Tasklist