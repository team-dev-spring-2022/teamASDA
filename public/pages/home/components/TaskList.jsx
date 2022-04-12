import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { styles } from './../style/taskList'
import { getData } from './../../../api/getData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { changeTaskStatus } from '../../../api/changeTaskStatus'

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
                            <IncompletedTask text={element.content}
                                date={element.date}
                                id={element._id}
                                key={Math.random()} />
                        )
                    }
                })
            }
            <Text style={styles.titleDisabled}>Completed</Text>
            {
                tasks.map(element => {
                    if (element.status == 'completed') {
                        return (
                            <CompletedTask text={element.content} key={Math.random()} />
                        )
                    }
                })
            }
        </View>
    )

    function CompletedTask(props) {
        return (
            <View style={styles.listElement}>
                <TouchableHighlight
                    style={styles.checkbox}>

                    <View></View>
                </TouchableHighlight>

                <Text style={styles.listTextDisabled}>{props.text}</Text>
            </View>
        )
    }

    function IncompletedTask(props) {
        function changeStatus(id) {
            changeTaskStatus(id)
            createList()
        }

        return (
            <View style={styles.listElement}>
                <TouchableHighlight
                    onPress={() => changeStatus(props.id)}
                    style={styles.checkbox}>

                    <View></View>
                </TouchableHighlight>

                <View>
                    <Text style={styles.listText}>{props.text}</Text>
                    <Text style={styles.listTextDate}>{props.date}</Text>
                </View>
            </View>
        )
    }
}

export default Tasklist
