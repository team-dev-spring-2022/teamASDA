import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/style/colors'

export const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 16,
        top: 52
    },
    container: {
        position: 'absolute',
        width: '100%',
        height: Dimensions.get('window').height,
        top: 0,
        left: 0,
        padding: 16,
        paddingTop: 50,
        backgroundColor: COLORS().background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: COLORS().title,
        fontFamily: 'Inter',
        paddingRight: 20
    },
    settingsItem: {
        marginTop: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    settingsText: {
        color: COLORS().defaultText,
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Inter'
    }
})