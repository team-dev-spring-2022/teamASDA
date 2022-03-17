const darkTheme = {
    title: 'rgba(255, 255, 255, 0.78)',
    disabledText: '#575767',
    defaultText: 'rgba(255, 255, 255, 0.7)',

    background: '#141419'
}

const lightTheme = {
    title: '#4b4b4b',
    disabledText: '#b3b3b4',
    defaultText: '#575767',

    background: '#fbfbfb'
}

export function COLORS() {
    const theme = 'light'

    if(theme == 'dark') {
        return darkTheme
    }

    else return lightTheme
}