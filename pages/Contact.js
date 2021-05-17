import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TextInput, Dimensions
} from 'react-native';
import { useState, useEffect } from "react";
import { ScaledSheet } from 'react-native-size-matters';



const Contact = ({ navigation }) => {


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
    <View style={{ flex: 1 }}>
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
              () => navigation.navigate('Portfolio')
            }
            title="Portfolio"
          />
          <Button
            onPress={
              () => navigation.navigate('Blog')
            }
            title="Blog"
          />
          
        </View>

<View>
        <View style={styles.first}>


<Text style={{fontSize:28,color: '#742012', width: '100%', height: 100 }}>Get in Touch</Text>


<TextInput
   style={styles.TextInputStyleClass}
   underlineColorAndroid="transparent"
   placeholder={"Enter Message"}
   placeholderTextColor={"#4c4b55"}
   numberOfLines={10}
   multiline={true}
 />

<TextInput
            style={styles.inputFt}
            placeholder=" Enter your name"
            placeholderTextColor={"#4c4b55"}

        />
      
        <TextInput
            style={styles.inputFt}
            placeholder="Email"
            placeholderTextColor={"#4c4b55"}

        />
        <TextInput
            style={styles.inputFt}
           placeholder = "Enter subject" 
           placeholderTextColor={"#4c4b55"}

        />



<Text style={styles.send }>Send</Text>


 {/* ---------------------Contact ----------------- */}
 <View style={{marginVertical: 30}}>
            <Text style={{ fontSize: 18, marginLeft: 15, marginVertical: 10}}>Buttonwood, California.</Text>

            <Text style={{ fontSize: 18, marginLeft: 15, color: '#b8b8b8'}}>Rosemead, CA 91770</Text>

            <Text style={{ fontSize: 18, marginLeft: 15, marginVertical: 10}}>+1 253 565 2365</Text>

            <Text style={{ fontSize: 18, marginLeft: 15,color: '#b8b8b8'}}>Mon to Fri 9am to 6pm</Text>

            <Text style={{ fontSize: 18, marginLeft: 15,marginVertical: 10}}>support@colorlib.com</Text>

            <Text style={{ fontSize: 18, marginLeft: 15,color: '#b8b8b8'}}>Send us your query anytime!</Text>

        </View>



</View>

</View>

  


    </View>  
    
     
 
<View>
 

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
    







  );
}

const styles = ScaledSheet.create({


      /*=================================Footer=======================*/


  first: {
    backgroundColor: '#fff',
    marginTop:50,
    
      },
  
      inputFt: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#999999',
        marginVertical: 10,
        fontSize:18,
        marginLeft: 15,
        backgroundColor: '#fff',
        color: '#4c4b55'
        
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

    TextInputStyleClass:{
     
      textAlign: 'center',
      height: 50,
      fontSize: 17,
      padding: 15,
      borderWidth: 2,
      borderColor: '#9E9E9E',
      borderRadius: 20 ,
      backgroundColor : '#fff',
      height: 150,
      marginLeft: 15,

       
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
          color: '#f9f69c'
          
      },

      TextInputStyleClass1:{
     
      textAlign: 'center',
      height: 50,
      fontSize: 17,
      padding: 15,
      borderWidth: 2,
      borderColor: '#9E9E9E',
      borderRadius: 20 ,
      backgroundColor : '#742012',
      height: 150,
      marginLeft: 15,

       
      },

      send: {
          fontSize: 17,
          color: '#742012',
          textAlign: 'center',
          padding: 15,
          backgroundColor: '#fff',
          width: 170,
          borderWidth: 1,
          borderColor: '#742012',
          marginVertical: 10, 
          marginLeft: 15,
      },


  
});


export default Contact;