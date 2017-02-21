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
  View
} from 'react-native';

import { Todolist } from './app/components/todoList.component';
import { Todo } from './app/components/todo.component';




var NavigationRouteMapper = {
  LeftButton( route, navigator) {
    if ( route.name === 'Todolist') {
      return null
    } else {
      return <TouchableHighlight
              onPress = { () => navigator.pop()}>
              <Text>Back</Text>
            </TouchableHighlight>
    }
  },
  RightButton( route, navigator) {
     if ( route.name === 'Todolist') {
      return <TouchableHighlight
              onPress = { () => navigator.push({name : 'Todo'})}>
              <Text>Create</Text>
            </TouchableHighlight>
    } else {
      return null
    }
  },
  Title( route, navigator) {
    return <Text>Todo</Text>
  }
}

export default class CreatingNavigation extends Component {

 initRenderScene=(route,navigator) =>{
 if ( route.name === 'Todolist') {
      return (<Todolist style={styles.Todolist} navigator={navigator}>Ajay</Todolist>)
    }
    if ( route.name === 'Todo' ) {
      return (<Todo style={styles.Todo} navigator={navigator}></Todo>)
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
       <Todo 
        style={styles.nav}
        listHeading={'Gym'}
        >
        {/*<Navigator
       <View style={styles.container}> 
        <Navigator
          style = {styles.navigator}
          initialRoute = {{ name: 'Todo'}}
          renderScene = {this.renderScene}
          
          navigationBar = {
            <Navigator.NavigationBar 
            routeMapper = { NavigationRouteMapper }
            style = {styles.navBar}
          />}
        />*/}
        </Todo>
     )
  }
}

const styles = StyleSheet.create({
  contentSection:{
    
    backgroundColor:'#cccccc',
  },
  container:{
    flex:1,
    alignSelf:'stretch',
  },
  navigator: {
    
  
  },
  nav: {
    backgroundColor: '#0000ff',
    padding: 50,
  },
      
  
 routerOutlet:{
backgroundColor :'#cccccc',
paddingTop:50,
flex:4
 },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CreatingNavigation', () => CreatingNavigation);
