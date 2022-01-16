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
import { NavigationHelpersContext } from "@react-navigation/core";


import {
  Camera,
  Permissions,
  FileSystem,
  Constants,
  ImageManipulator,
} from "expo";

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

    //sendToImgur(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);

      sendToMicrosoftPrediction('https://www.simplyrecipes.com/thmb/D36n4AKqg_LGsVkOjFkt_OIHkPM=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__Sous-Vide-Steak-LEAD-3-33b9edd4bc1c47faa86fd74e18b59cc8.jpg');
    }

  };

  

  return (<View>
    {
      image && <Image source={{ uri : image }} style={{ width: 200, height: 200 }} />
    }
    <Button onPress={addImage} title="Upload" />
    <StartAnalysis image={image} />
    
    </View>);
}

// function for 'start analysis'
const StartAnalysis = (props) => {
  //const [image, setImage] = useState(props.image);

  //sendToImgur(JSON.stringify(props.image))


  return (
    <View>
      <Button title="Start Analysis" onPress={StartAnalysis}/>
    </View>
  );

}

// Downsizes photo and uses Imgur API to
  // get a web url of photo, sends to Prediction API
  // (calls sendToMicrosoftPrediction)
  async function sendToImgur(photoLoc) {
    try {
      // Use Image Manipulator to downsize image
      let manipulatedObj = await ImageManipulator.manipulateAsync(
        photoLoc,
        [{ resize: { width: 200 } }],
        { base64: true }
      );
      var xmlHttp = new XMLHttpRequest();
      const data = new FormData();
      xmlHttp.onreadystatechange = (e) => {
        if (xmlHttp.readyState == 4) {
          if (xmlHttp.status === 200) {
            // Send Imgur link to photo to be sent to Prediction API
            let imgur_json = JSON.parse(xmlHttp.responseText);
            sendToMicrosoftPrediction(imgur_json.data.link);
          } else {
            // Debug errors
            console.log(xmlHttp.responseJson);
          }
        }
      };
      xmlHttp.open("POST", "https://api.imgur.com/3/upload", true);
      xmlHttp.setRequestHeader(
        "Authorization",
        "Client-ID " + '0a3d2bd65d89e8e'
      );
      data.append("type", "base64");
      data.append("image", manipulatedObj.base64);
      xmlHttp.send(data);
    } catch (error) {
      console.error(error);
    }
  }

  // Uses Prediction API to process photo at a web url
  // and calls setNewPrediction
  async function sendToMicrosoftPrediction(img_url) {
    let response = await fetch('https://northcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0bd36f77-e0bd-4ddf-a9ac-885ad5a02294/classify/iterations/Iteration2/url', {
      method: "POST",
      headers: {
        "Prediction-Key": 'd397fe879edd433494726fab25579bee',
        "Content-Type": 'application/octet-stream',
      },
      body: JSON.stringify({
        Url: img_url,
      }),
    });
  
    let bodyText = JSON.parse(response["_bodyText"]);
    let predictions = bodyText["predictions"];
    setNewPrediction(predictions);
  }

  // Sets tagText to most probable tag
  function setNewPrediction(predictions) {
    state = {
      tagText: "none",
    };

    let maxProb = 0;
    let bestTag = "None";
    for (let predMap of predictions) {
      if (predMap.probability > maxProb) {
        maxProb = predMap.probability;
        bestTag = predMap.tagName;
      }
    }

    this.setState({
      tagText: `AI says: ${bestTag}\nProbability: ${maxProb.toString()}`
    });
    console.log('reached');
    this.resetPredictionInterval = setInterval(
      this.resetPredictionText.bind(this),
      20000
    );

    return (
      <View>
        <Text>{this.tagText}</Text>
      </View>
    );
  }





