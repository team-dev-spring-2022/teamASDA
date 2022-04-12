import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/style/colors'

export const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    header: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        color: COLORS().defaultText,
        fontSize: 16
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    title: {
        fontSize: 20,
        color: COLORS().defaultText,
        fontWeight: '700'
    }
})