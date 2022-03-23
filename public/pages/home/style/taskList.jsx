import { StyleSheet } from 'react-native'
import { COLORS } from './../../../templates/style/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 16,
        paddingTop: 0,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Inter',
        color: COLORS().title,
        fontWeight: '700',
        marginBottom: 16
    },
    checkbox: {
        alignSelf: 'center',
        width: 20,
        height: 20,
        borderRadius: 5,
    },
    listElement: {
        flexDirection: 'row',
        marginBottom: 32
    },
    listText: {
        fontSize: 18,
        fontFamily: 'Inter',
        color: COLORS().defaultText,
        marginLeft: 16,
        fontWeight: 500,
    },
    listTextDisabled: {
        fontSize: 18,
        fontFamily: 'Inter',
        color: COLORS().disabledText,
        marginLeft: 16,
        fontWeight: 500,
    },
    titleDisabled: {
        fontSize: 18,
        fontFamily: 'Inter',
        color: COLORS().title,
        fontWeight: '700',
        marginBottom: 16,
        marginTop: 20
    },
    listElementDisabled: {
        flexDirection: 'row',
        marginBottom: 16
    }
})