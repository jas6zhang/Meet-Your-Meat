import * as ImagePicker from 'expo-image-picker';

// https://blog.waldo.io/add-an-image-picker-react-native-app/ 

// function that allows you to choose image from gallery

const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,
    });

    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
        setImage(_image.uri);
    }
}


// function that checks if user gives library access permissions

const checkForCameraRollPermission=async()=> {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert("Please grant camera roll permissions inside your system's settings");
    }else{
      console.log('Media Permissions are granted')
    }
  
}