import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from './../../../templates/style/colors'

export const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 16,
        top: Dimensions.get('window').height - 100
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS().background,
        padding: 16,
        paddingTop: 50,
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
    inputContainer: {
        padding: 20
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#939292',
        color: COLORS().defaultText
    }
})