import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
}
 
export default HomeScreen

const styles = StyleSheet.create({})