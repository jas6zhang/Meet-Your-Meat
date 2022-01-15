// importing library functions
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// importing other functions
import Upload from './UploadImage';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Meat Ur Meat</Text>
      <Button title="Camera" />
      <Upload />
      <StatusBar style="auto" />
    </View>
  );
}

// Stack function for multiple screens
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
