// importing library functions
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, createAppContainer } from "react-navigation";

// importing other functions
import Upload from "./UploadImage";
// import PredictFromCamera from "./PredictionAi";

// HomeScreen function

//require("dotenv").config();

// official start page

function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate("MeatSelection")}
      />
    </View>
  );
}

// picture options page

function TakePicture() {
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
function ChickenPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Upload />
      <Button title="Start Analysis" />
      <StatusBar style="auto" />
    </View>
  );
}

function SteakPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button title="Camera" />
      <Button title="Start Analysis" />
      <StatusBar style="auto" />
    </View>
  );
}

function PorkPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <Button title="Camera" />
      <Button title="Start Analysis" />
      <StatusBar style="auto" />
    </View>
  );
}

function MeatSelection({ navigation }) {
  return (
    <View>
      <Text>Choose Your Meat</Text>
      <Button
        title="Sizzling Steak"
        onPress={() => navigation.navigate("SteakPage")}
      />
      <Button
        title="Juicy Chicken"
        onPress={() => navigation.navigate("ChickenPage")}
      />
      <Button
        title="Yummy Pork"
        onPress={() => navigation.navigate("PorkPage")}
      />
    </View>
  );
}
// Stack function for multiple screens
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="MeatSelection" component={MeatSelection} />
        <Stack.Screen name="TakePicture" component={TakePicture} />

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
