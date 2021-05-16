import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
// import * as React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
  Dimensions 
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer  = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  const [mode, setMode] = useState("portrait");
  const [Height_Layout, setHeight_Layout] = useState();
  const [Width_Layout, setWidth_Layout] = useState();



  useEffect(() => {
      DetectOrientation();
  }, [Height_Layout])

const DetectOrientation = () => {
  if(Width_Layout > Height_Layout)
  {
      setMode("landscape");
  }
  else{
    setMode("portrait");
  }
}



  return (

    
    
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity  onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://tutorialscapital.com/wp-content/uploads/2017/11/hamburger.png'}}
          style={{
            width: 25,
            height: 25,
            marginRight: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
    

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure 
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f9f69c', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
     



  );
}


function secondScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'About', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f9f69c', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Portfolio">
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            title: 'Portfolio', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f9f69c', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Blog">
        <Stack.Screen
          name="Blog"
          component={Blog}
          options={{
            title: 'Blog', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f9f69c', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function fifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f9f69c', //Set Header color
        },
        headerTintColor: '#5f2232', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About', //Set Header Title
          
        }}/>
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          title: 'Portfolio', //Set Header Title
        }}/>

<Stack.Screen
name="Blog"
component={Blog}
options={{
  title: 'Blog', //Set Header Title
}}/>

<Stack.Screen
name="Contact"
component={Contact}
options={{
  title: 'Contact', //Set Header Title
}}/>
</Stack.Navigator>
  
  );
}

function App() {

  
  return (
    <NavigationContainer>
      <Drawer.Navigator 
     // drawerPosition="right"
     //a drawerStyle={{backgroundColor: '#fff', width: 260}}
        drawerContentOptions={{
          activeTintColor: '#e7d0c0',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen 
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack} />
        <Drawer.Screen 
          name="About"
          options={{ drawerLabel: 'About' }}
          component={secondScreenStack} />
          <Drawer.Screen
          name="Portfolio"
          options={{ drawerLabel: 'Portfolio' }}
          component={thirdScreenStack} />
          <Drawer.Screen
          name="Blog"
          options={{ drawerLabel: 'Blog' }}
          component={fourthScreenStack} />
          <Drawer.Screen
          name="Contact"
          options={{ drawerLabel: 'Contact' }}
          component={fifthScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;