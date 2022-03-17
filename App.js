import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './public/pages/authenfication/Authenfication'
import Home from './public/pages/home/Home'
import { COLORS } from './public/templates/style/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS().background
  },
})