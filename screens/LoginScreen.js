import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const LoginScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})