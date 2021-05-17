import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    Text,
    View,
    SafeAreaView,
    Modal, 
    Pressable,
    Dimensions
  } from "react-native";
  import { ScaledSheet } from "react-native-size-matters";
  import { WebView } from "react-native-webview";

  import Icon from "react-native-vector-icons/MaterialCommunityIcons";

 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");
 
 
 const App = () => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const [mode, setMode] = useState("portrait");
   const [modalVisible, setModalVisible] = useState(false);
   const [playing, setPlaying] = useState(false);

   const image = { uri: "https://wallpapercave.com/wp/wp4161157.jpg" };
   const header = {uri:"https://wallpapercave.com/wp/L4VDCjJ.jpg"};


   const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 
      
    } else {
      setMode("portrait") 
     
    }
    console.log(mode, playing)
    setPlaying(false)
   };

 const onChange = ({ window, screen }) => {
     setDimensions({ window, screen });
   };

 useEffect(() => {
     Dimensions.addEventListener("change", onChange);

     return () => {
       Dimensions.removeEventListener("change", onChange),
      modeMaker();
     };

   });
  
 return (
    
    <SafeAreaView style={styles.container}>
    <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        supportedOrientations={['landscape']} 
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
    }}>
        <View style={styles.view}>
            <View style={styles.video}>
            <WebView source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}/>
            </View>

            <Pressable style={[styles.button, styles.close]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
        
        </View>
    </Modal>


    {mode === "portrait" ? <View style={styles.imagecontainer}>
    <ImageBackground source={image} style={styles.image}>
      <Icon name="play" color="white" size={120} onPress={() => setModalVisible(true)} />
    </ImageBackground>
  
    </View> : null}
    

    <View style = {styles.footer}>
            <Text 
            style={{fontSize: 16, lineHeight: 25, textAlign: 'center', color: "#742012"}}>Copyright ©2021 All rights reserved | This template is made with ♡ by 
            <Text style={{color: '#742012'}}> Colorlib</Text>
            </Text>
        </View>


        </SafeAreaView>



   );
 }
const styles = ScaledSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f9f69c",
    alignItems: "center",
    flexDirection: "column",
  },

  imagecontainer: {
    justifyContent: "flex-start",
    width: "90%",
    height: '180@s',
    backgroundColor: "#f9f69c",
    marginTop: 0,
  },

  
  image: {
    width: "100%",
    height: '100%',
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#fff',
    borderWidth: '4@s'
              
  },
  
 
  
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    marginBottom:3,
    alignItems: 'center'
  },

  close: {
    backgroundColor: "#5f2232",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  
  view: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    marginTop: -8,
    alignItems: "center",
    height: "200%",
  },

  video: {
    flex:1,
    width: "105%",
    backgroundColor: "black",

  },

  footer: {
marginTop: 180

  }

 });
 export default App;