// importing library functions
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, createAppContainer } from "react-navigation"; 

// importing other functions
import Upload from "./UploadImage";
import AppNavigator from "./AppNavigator.js";

// Homescreen function

//require("dotenv").config();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button title="Camera" 
      onPress={() => navigation.AppNavigator()}/>
      {/* <Upload
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

// Meat selection screen function
function ChickenPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button title="Camera" />
      {/* <Upload
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}
      <StatusBar style="auto" />
    </View>

  )

}

function SteakPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button title="Camera" />
      {/* <Upload
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}
      <StatusBar style="auto" />
    </View>

  )

}

function PorkPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button title="Camera" />
      {/* <Upload
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}
      <StatusBar style="auto" />
    </View>
  )
}

function MeatSelection() {
  return (
    <View>
      <Text>Choose Your Meat</Text>
      <Button
        title="Sizzling Steak"
        onPress={() => navigation.push("SteakPage")}
      />
      <Button title="Juicy Chicken" 
        onPress={() => navigation.push('ChickenPage')}
      />
      <Button title="Yummy Pork" 
        onPress={() => navigation.push('PorkPage')}
      />
    </View>
  );
}
// Stack function for multiple screens
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="ChickenPage" component={ChickenPage} />
        <Stack.Screen name="SteakPage" component={SteakPage} />
        <Stack.Screen name="PorkPage" component={PorkPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
