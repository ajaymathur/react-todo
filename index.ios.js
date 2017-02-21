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
  Text
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

 

  renderScene(route, navigator) {
    if ( route.name === 'Todolist') {
      return (<Todolist navigator={navigator}>Ajay</Todolist>)
    }
    if ( route.name === 'Todo' ) {
      return (<Todo navigator={navigator}></Todo>)
    }
  }

  render() {
     return (
       <Todo 
        style={styles.nav}
        listHeading={'Gym'}
        >
        {/*<Navigator
          style = {styles.navigator}
          initialRoute = {{ name: 'Todo'}}
          renderScene = {this.renderScene}
          style = {{padding: 50}}
          navigationBar = {
            <Navigator.NavigationBar 
            routeMapper = { NavigationRouteMapper }
            style = {styles.nav}
          />}
        />*/}
        </Todo>
     )
  }
}

const styles = StyleSheet.create({
  navigator: {
  },
  nav: {
    backgroundColor: '#0000ff',
    padding: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CreatingNavigation', () => CreatingNavigation);
