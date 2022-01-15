import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native'; 

export default function App() {
  return (
    //<NavigationContainer>
    <View style={styles.container}>
      <Text>Meat Ur Meat</Text>
      <Button title="Camera" />
      <Button title="Upload" />
      <StatusBar style="auto" />
    </View>
    //</NavigationContainer>
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
