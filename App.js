// importing library functions
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// importing other functions
import Upload from './UploadImage';


// Homescreen function

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button title="Camera" />
      <Upload />
      <StatusBar style="auto" />
    </View>
  );
}

// Meat selection screen function

function MeatSelection() {
  return (
    <View>
      <Text>Choose Your Meat</Text>
      <Button title="Sizzling Steak" />
      <Button title="Juicy Chicken" />
      <Button title="Yummy Pork" />
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
