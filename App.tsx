import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import { Pet } from './pet';

export default function App() {
  const petName = {
    firstName : "Rojer",
    lastName : "Porticous"
  }
  return (
    <View style={styles.container}>
      <Welcome name = "bob" age = {23} />
      <Text>Open up App.js to start working on your app!</Text>
      
      <Pet petName={petName} type='chicken' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
