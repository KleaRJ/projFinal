import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TextInput, Dimensions, ScrollView,
} from 'react-native';
import { useState, useEffect } from "react";
import { ScaledSheet } from 'react-native-size-matters';




const Portfolio = ({ navigation }) => {
    const window = Dimensions.get('window');
    const screen = Dimensions.get('screen');

  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");



  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape")

    } else {
      setMode("portrait")

    }
    console.log(mode)
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
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>



        <View
          style={{
            flex: 1,
            alignItems: 'right',
            justifyContent: 'right',
          }}>
          <Button
            onPress={
              () => navigation.navigate('Home')
            }
            title="Home"
          />
          <Button
            onPress={
              () => navigation.navigate('About')
            }
            title="About"
          />

          <Button
            onPress={
              () => navigation.navigate('Blog')
            }
            title="Blog"
          />
          <Button
            onPress={
              () => navigation.navigate('Contact')
            }
            title="Contact"
          />
        </View>






{/* -----------------------------Expertise ---------------------- */}

<View style={styles.expertise}>

<Text style={{margin:30, fontSize:42, color: '#742012'}}>My Expertise</Text>

<View style={styles.bcg}>

<Text style={{ margin:25, fontSize:30, color: '#742012'}}>Experience</Text>
<Text style={{marginLeft:25, marginTop: -20, fontSize:30, color: '#742012'}}>Design</Text>
<Text style={{marginLeft:25, marginTop: 35, fontSize:20, color: '#4c4b55'}}>Switzerland where I am a full time</Text>
<Text style={{marginLeft:25, marginTop: 3, marginBottom: 20,  fontSize:20, color: '#4c4b55'}}>Product Designer.</Text>

</View>

<View style={styles.bcg1}>

<Text style={{ margin:25, fontSize:30, color: '#742012'}}>Interaction</Text>
<Text style={{marginLeft:25, marginTop: -20, fontSize:30, color: '#742012'}}>Design</Text>
<Text style={{marginLeft:25, marginTop: 35, fontSize:20, color: '#4c4b55'}}>Switzerland where I am a full time</Text>
<Text style={{marginLeft:25, marginTop: 3, fontSize:20, color: '#4c4b55'}}>Product Designer.</Text>


</View>


<View style={styles.bcg2}>

<Text style={{ margin:25, fontSize:30, color: '#742012'}}>Front-end</Text>
<Text style={{marginLeft:25, marginTop: -20, fontSize:30, color: '#742012'}}>Design</Text>
<Text style={{marginLeft:25, marginTop: 35, fontSize:20, color: '#4c4b55'}}>Switzerland where I am a full time</Text>
<Text style={{marginLeft:25, marginTop: 3, marginBottom: 90, fontSize:20, color: '#4c4b55'}}>Product Designer.</Text>
</View>
</View>

<Text style={{marginTop: 70, fontSize:32, color: '#742012', marginLeft: 40}}>Selected Portfolios</Text>


{/*==========================Photos====================*/}
<View style={styles.photos}>

<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <Image
     style={{
       flex: 1,
       width:'90%',
       height:400,
     }}
     source={{uri: 'https://preview.colorlib.com/theme/jonson/assets/img/gallery/gallery1.png'}}/>
    </View>

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <Image
     style={{
       flex: 1,
       width:'90%',
       height:400,
     }}
     source={{uri: 'https://preview.colorlib.com/theme/jonson/assets/img/gallery/gallery2.png'}}/>
    </View>


    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <Image
     style={{
       flex: 1,
       width:'90%',
       height:400,
     }}
     source={{uri: 'https://preview.colorlib.com/theme/jonson/assets/img/gallery/gallery3.png'}}/>
    </View>

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <Image
     style={{
       flex: 1,
       width:'90%',
       height:400,
     }}
     source={{uri: 'https://preview.colorlib.com/theme/jonson/assets/img/gallery/gallery4.png'}}/>
    </View>

    {/*=================================Footer=======================*/}

    <View style={styles.footer}>

<Text style={{margin:30, fontSize:22, color: '#fff'}}>Do you want to know more about me?</Text>

<Text style={styles.download }>Download CV</Text>

<Text style={{backgroundColor: '#742012', color: '#f9f69c', fontSize: 18, margin: 20}}>Contact Me</Text>

<TextInput
            style={styles.inputF}
            placeholder="Your name"
            placeholderTextColor={"#f9f69c"}

        />

        <TextInput
            style={styles.inputF}
            placeholder="Email"
            placeholderTextColor={"#f9f69c"}

        />
        <TextInput
            style={styles.inputF}
           placeholder = "Subject"
           placeholderTextColor={"#f9f69c"}

        />

<TextInput
   style={styles.TextInputStyleClass1}
   underlineColorAndroid="transparent"
   placeholder={"Message"}
   placeholderTextColor={"#f9f69c"}
   numberOfLines={10}
   multiline={true}
 />

<Text style={styles.subm}>Submit</Text>




</View>

</View>

        <View>
            <Text
            style={{fontSize: 16, lineHeight: 25, textAlign: 'center', color: "#f9f69c", backgroundColor : '#742012'}}>Copyright ©2021 All rights reserved | This template is made with ♡ by
            <Text style={{color: '#f9f69c', backgroundColor : '#742012'}}> Colorlib</Text>
            </Text>
        </View>


    </View>



</ScrollView>







  );
}

const styles = ScaledSheet.create({

  photos: {

    backgroundColor: '#f9f69c'
  },

  expertise: {

    backgroundColor: '#fff'
  },

  bcg: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    height: 220,
    color: '#742012',
    marginLeft: 30,
    marginBottom:40
  },

  bcg1: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    height: 220,
    color: '#742012',
    marginLeft: 30,
    marginBottom:40
  },

  bcg2: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    height: 220,
    color: '#742012',
    marginLeft: 30,
  },

      /*=================================Footer=======================*/


  footer: {
    backgroundColor: '#742012',
    marginTop:50,

      },

      inputF: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#999999',
        marginVertical: 10,
        fontSize:18,
        marginLeft: 15,
        backgroundColor: '#742012',
        color: '#f9f69c',
        width: '95%'

    },
    download: {
        fontSize: 17,
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#f9f69c',
        width: 170,
        marginLeft: 30,
        borderWidth: 1,
        borderColor: '#742012',
        marginVertical: 20
    },

    TextInputStyleClass1:{

      textAlign: 'center',
      // height: 50,
      fontSize: 17,
      padding: 15,
      borderWidth: 2,
      borderColor: '#9E9E9E',
      borderRadius: 20 ,
      backgroundColor : '#742012',
      height: 150,
      marginLeft: 15,
      width: '95%'


      },

      subm: {
        fontSize: 20,
        textAlign: 'center',
        padding: 25,
        backgroundColor: '#f9f69c',
        width: '95%',
        borderWidth: 1,
        borderColor: '#000',
        marginVertical: 10,
        marginLeft: 15


    },



});


export default Portfolio;
