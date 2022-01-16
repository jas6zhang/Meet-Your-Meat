// importing library functions
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Image } from "react-native";

// import * as Progress from "react-native-progress";

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
      <TouchableOpacity
        style={styles.button}
        title="Start"
        onPress={() => navigation.navigate("Meat Select")}
      />
    </View>
  );
}

// picture options page

function TakePicture() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <TouchableOpacity title="Camera" />
      <Upload />
      <StatusBar style="auto" />
    </View>
  );
}

function LoadingPage() {
  return (
    <View style={styles.container}>
      <Text>Loading Analysis...</Text>
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
      <TouchableOpacity title="Start Analysis" />
      <StatusBar style="auto" />
    </View>
  );
}

function SteakPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <TouchableOpacity title="Camera" />
      <TouchableOpacity title="Start Analysis" />
      <StatusBar style="auto" />
    </View>
  );
}

function PorkPage() {
  return (
    <View style={styles.container}>
      <Text>Meet Ur Meat</Text>
      <TouchableOpacity title="Camera" />
      <TouchableOpacity title="Start Analysis" />
      <StatusBar style="auto" />
    </View>
  );
}

function MeatSelection({ navigation }) {
  return (
    <View>
      <Text style={font.titleText}>Choose Your Meat</Text>

      <View style={meatLogos.container}>
        <TouchableOpacity
          style={styles.button}
          title="Sizzling Steak"
          onPress={() => navigation.push("Steak Analysis")}
        />
        <Image source={require("./images/beef.png")} />
      </View>

      <View style={meatLogos.container}>
        <TouchableOpacity
          paddingVertical="12"
          backgroundColor="black"
          style={{ fontSize: 20, color: "green" }}
          title="Juicy Chicken"
          onPress={() => navigation.push("Chicken Analysis")}
        />
        <Image
          // style={{ float: "right" }}
          source={require("./images/chicken.png")}
        />
      </View>

      <View style={meatLogos.container}>
        <TouchableOpacity
          style={styles.button}
          title="Yummy Pork"
          onPress={() => navigation.push("Pork Analysis")}
        />
        <Image source={require("./images/chop.png")} />
      </View>
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
        <Stack.Screen name="Home Page" component={StartPage} />
        <Stack.Screen name="Meat Select" component={MeatSelection} />
        <Stack.Screen name="Take Picture" component={TakePicture} />

        <Stack.Screen name="Chicken Analysis" component={ChickenPage} />
        <Stack.Screen name="Steak Analysis" component={SteakPage} />
        <Stack.Screen name="Pork Analysis" component={PorkPage} />
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
  button: {
    paddingVertical: 30,
    marginTop: 10,
    marginLeft: 20,
    paddingHorizontal: 100,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});

const meatLogos = StyleSheet.create({
  container: {
    height: 59,
    width: 73,
  },
});

const font = StyleSheet.create({
  titleText: {
    fontFamily: "Copperplate",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  baseText: {
    fontFamily: "San Francisco",
    fontSize: 20,
    fontWeight: "bold",
  },
});
