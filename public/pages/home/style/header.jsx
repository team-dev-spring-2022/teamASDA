import { StyleSheet, Dimensions } from "react-native"
import { COLORS } from './../../../templates/style/colors'

export const styles = StyleSheet.create({
    header: {
        padding: 16,
        paddingTop: 50,
    },
    date: {
        fontSize: 32,
        fontWeight: '700',
        color: COLORS().title,
        fontFamily: 'Inter'
    },
    statusContainer: {
        flexDirection: 'row'
    },
    statusText: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 8,
        color: COLORS().disabledText,
        fontFamily: 'Inter'
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: COLORS().disabledText,
        marginTop: 15,
        opacity: 0.2
    }
})