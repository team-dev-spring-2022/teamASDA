import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'

import Navigator from './public/Navigator'

import { COLORS } from './public/templates/style/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS().background,
    height: Dimensions.get('window').height,
    width: '100%'
  },
})