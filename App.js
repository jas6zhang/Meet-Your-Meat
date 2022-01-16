// importing library functions
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Image } from "react-native";
import { useFonts } from "expo-font";

// import * as Progress from "react-native-progress";
// shift + i to switch simulator device
// importing other functions
import Upload from "./UploadImage";
// import PredictFromCamera from "./PredictionAi";

// HomeScreen function

//require("dotenv").config();

// official start page

function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ position: "absolute", top: 0, left: 0 }}
        source={require("./assets/Blobs/3.png")}
      />
      <Image
        style={{ position: "absolute", bottom: 100, right: -40 }}
        source={require("./assets/Blobs/1.png")}
      />

      <Image
        style={{ position: "absolute", top: 170, left: -30 }}
        source={require("./assets/Blobs/2.png")}
      />

      <Image
        style={{ position: "absolute", top: 0, right: 0 }}
        source={require("./assets/Blobs/4.png")}
      />

      <Image
        style={{ position: "absolute", bottom: 0, left: 0 }}
        source={require("./assets/Blobs/5.png")}
      />
      <Text style={font.titleText}>Meet Ur Meat</Text>
      <Text style={{ position: "absolute", bottom: 10, right: 30 }}>
        Developed with ❤️
      </Text>
      <TouchableOpacity
        style={{ ...styles.button, ...styles.titleButton }}
        onPress={() => navigation.navigate("Meat Select")}
      >
        <Text style={font.baseText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

// picture options page

function TakePicture() {
  return (
    <View style={styles.container}>
      <Text style={font.titleText}>Meet Ur Meat</Text>
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
function ChickenPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={[
          { position: "absolute", top: 0 },
          {
            transform: [{ scale: 1.04 }],
          },
        ]}
        source={require("./assets/RectangleAnalysis.png")}
      />
      <Upload />
      <TouchableOpacity
        style={{ ...styles.button, ...styles.titleButton }}
        onPress={() => navigation.push("Steak Analysis")}
      >
        <Text style={font.baseText}>Start Analysis</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function SteakPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        //  style={{ position: "absolute", top: 0 }}
        style={[
          { position: "absolute", top: 0 },
          {
            transform: [{ scale: 1.04 }],
          },
        ]}
        source={require("./assets/RectangleAnalysis.png")}
      />
      <TouchableOpacity title="Camera" />

      <TouchableOpacity
        style={{ ...styles.button, ...styles.buttonMargins2 }}
        onPress={() => navigation.push("Steak Analysis")}
      >
        <Text style={font.baseText}>Start Analysis</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function PorkPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={[
          { position: "absolute", top: 0 },
          {
            transform: [{ scale: 1.04 }],
          },
        ]}
        source={require("./assets/RectangleAnalysis.png")}
      />
      <TouchableOpacity title="Camera" />
      <Upload />
      <TouchableOpacity
        style={{ ...styles.button, ...styles.buttonMargins2 }}
        onPress={() => navigation.push("Steak Analysis")}
      >
        <Text style={font.baseText}>Start Analysis</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function MeatSelection({ navigation }) {
  return (
    // <View style={{ alignItems: "flex-end" }}>

    <View>
      <Text style={font.meatSelectText}>Choose Your Meat</Text>

      <Image
        style={{ position: "absolute", bottom: 0, right: 0, width: 400 }}
        source={require("./assets/MeatSelect/Rectangle.png")}
      />
      <Image
        style={{ position: "absolute", bottom: 0, right: 0 }}
        source={require("./assets/MeatSelect/Circle1.png")}
      />
      <Image
        style={{ position: "absolute", bottom: 0, left: 0 }}
        source={require("./assets/MeatSelect/Circle2.png")}
      />

      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{ ...styles.button, ...styles.buttonMargins2 }}
          onPress={() => navigation.push("Steak Analysis")}
        >
          <Text style={font.baseText}>Sizzling Steak</Text>
        </TouchableOpacity>
        <Image source={require("./images/beef.png")} />
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{ ...styles.button, ...styles.buttonMargins2 }}
          onPress={() => navigation.push("Chicken Analysis")}
        >
          <Text style={font.baseText}>Juicy Chicken</Text>
        </TouchableOpacity>
        <Image
          style={{ height: "50%" }}
          source={require("./images/chicken.png")}
        />
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{ ...styles.button, ...styles.buttonMargins2 }}
          onPress={() => navigation.push("Pork Analysis")}
        >
          <Text style={font.baseText}>Yummy Pork</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={require("./images/chop.png")} />
      </View>

      {/* 
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
      </View> */}

      {/* <View style={meatLogos.container}>
        <TouchableOpacity
          style={styles.button}
          title="Yummy Pork"
          onPress={() => navigation.push("Pork Analysis")}
        />
        <Image source={require("./images/chop.png")} />
      </View> */}
    </View>
  );
}
// Stack function for multiple screens
const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    Odibee: require("./assets/OdibeeSans-Regular.ttf"),
    SF: require("./assets/SF-UI-Display-Regular.otf"),
  });
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
  image: {
    resizeMode: "contain",
    flex: 1,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "grey",
  },
  buttonMargins2: {
    marginTop: 40,
    marginLeft: 30,
    alignSelf: "flex-start",
  },
  titleButton: {
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: "Odibee",
    marginBottom: 40,
    fontSize: 65,
  },
  meatSelectText: {
    fontFamily: "Copperplate",
    marginTop: 60,
    marginLeft: 30,
    fontSize: 30,
  },
  baseText: {
    fontFamily: "SF",
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  smallText: {
    fontFamily: "SF",
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
});
