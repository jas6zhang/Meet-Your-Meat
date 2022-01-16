import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native";
//import PredictFromCamera from "./components/PredictFromCamera";

import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

// https://blog.waldo.io/add-an-image-picker-react-native-app/

// function for when user chooses "upload" on home screen

export default function Upload() {
  const [image, setImage] = useState(null);

  // helper function that allows user to add photo to state
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

  return <Button onPress={addImage} title="Upload" />;
}

// function that checks if user gives library access permissions

const checkForCameraRollPermission = async () => {
  const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
  if (status !== "granted") {
    alert("Please grant camera roll permissions inside your system's settings");
  } else {
    console.log("Media Permissions are granted");
  }
};
