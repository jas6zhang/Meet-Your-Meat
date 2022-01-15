import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Meat Ur Meat lol</Text>
      <Button title="Camera" />
      <Button title="Upload" />
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


// function for when user selects "camera"
const Camera = (props) => {

}


// function for when user selects "upload"

const Upload = (props) => {


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
