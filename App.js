// importing library functions
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importing other functions
import Upload from "./UploadImage";

// Homescreen function

//require("dotenv").config();

function HomeScreen() {
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

// function ChickenPage() {
//   return (

//   )

// }

// function SteakPage() {
//   return (

//   )

// }

// function PorkPage() {
//   return (

//   )
// }
// Stack function for multiple screens
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Profile" component={ProfileScreen} />
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
