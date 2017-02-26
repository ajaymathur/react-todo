/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text,
  View,
  TouchableOpacity,

} from 'react-native'

import { Todolist } from './app/components/todoList.component';
import { Todo } from './app/components/todo.component';




var NavigationRouteMapper = {
  LeftButton( route, navigator) {
    if ( route.name === 'Todolist') {
      return null
    } else {
      return <TouchableHighlight
              onPress = { () => navigator.pop()}
             >
              <Text  style={styles.leftNav}>Back</Text>
            </TouchableHighlight>
    }
  },
  
  RightButton( route, navigator) {
     if ( route.name === 'Todolist') {
      return <TouchableHighlight
              onPress = { () => navigator.push({name : 'Todo'})}>
              <Text  style={styles.rightNav}>Create</Text>
            </TouchableHighlight>
    } else {
      return null
    }
  },
  Title( route, navigator) {
    return <Text  style={styles.title}>Todo</Text>
  }
}

export default class CreatingNavigation extends Component {

 initRenderScene=(route,navigator) =>{
 if ( route.name === 'Todolist') {
      return (
        <View style={styles.Todolist}>
      <Todolist  navigator={navigator}>Ajay</Todolist></View>)
    }
    if ( route.name === 'Todo' ) {
      return (
      <View style={styles.Todo} >
      <Todo navigator={navigator} {...route.passProps}></Todo>
      </View>
      )
    }
 }

  renderScene=(route, navigator)=> {
    return(
      <View style={styles.routerOutlet}>
        {this.initRenderScene(route, navigator)}
      </View>
    )
   
  }

  render() {
     return (
        <Navigator
          style = {styles.navigator}
          initialRoute = {{ name: 'Todolist'}}
          renderScene = {this.renderScene}
          
          navigationBar = {
            <Navigator.NavigationBar 
            routeMapper = { NavigationRouteMapper }
            style = {styles.navBar}
          />}
        />
     )
  }
}

const styles = StyleSheet.create({
  
  container:{
    //flex:1,
    //alignSelf:'stretch',
  },
  
  Todolist:{
    // backgroundColor:'red',
    // flex:1
    flexDirection:"column",
    justifyContent:'space-between',
  },
  navBar:{
paddingTop:20,
height:64,
backgroundColor:'#F4F4F4',
borderBottomWidth: StyleSheet.hairlineWidth,
borderBottomColor:'#DDDDDD',
paddingHorizontal:12,
overflow:'hidden',
//  flex:1,
//  flexDirection:'row',
//  justifyContent:'space-between',
//  alignItems:'center',
  },
  leftNav :{
    color:'#089de3',
  },
  rightNav :{
    color:'#089de3',
  },
  title :{
    fontWeight:'bold',
  },
  nav: {
    //backgroundColor: '#0000ff',
    //padding: 50,
  },
    Todo:{
//flex:1,
    //  flexDirection:'column',
    //   justifyContent:'space-between',
    //   alignItems:'center'
    },

  
 routerOutlet:{
backgroundColor :'#fff',
paddingTop:64,
flex:1,

 }
});

AppRegistry.registerComponent('CreatingNavigation', () => CreatingNavigation);
