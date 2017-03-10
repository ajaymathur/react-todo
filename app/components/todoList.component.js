import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  AsyncStorage,
  Button,
  View,
} from "react-native";

export class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  componentDidMount() {
    this.__getList().done();
    //this._populateStorage().done();
  }

  componentWillReceiveProps() {
    this.__getList().done();
  }

  /**
     * @author ajay narain mathur
     * @description get the complete todo list when app initializes
     *              sets state property todoList to the complete list
     * @type high siverity
     */

  __getList = async () => {
    try {
      let todoList = await AsyncStorage.getItem("todoList");
      console.log("todo list is ", todoList);
      if (todoList) {
        this.setState({
          todoList: JSON.parse(todoList)
        });
        console.log(todoList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
     * @author ajay narain mathur
     * @deprecated
     * @description Initialize todoList for testing
     * @type low, will be removed in build
     */

  _populateStorage = async () => {
    try {
      //await AsyncStorage.setItem('todoList', JSON.stringify({'a324324': [{'title': 'clean', 'completed': true}]}));
      //AsyncStorage.removeItem('todoList');
      console.log("successfully set");
    } catch (e) {
      console.log(e);
    }
  };

  /**
     * @author ajay narain mathur
     * @description navigator to take to second screen, todo
     *              sends passProps value as the listid of list
     *              selected
     * @type high siverity
     */

  _navigator(listId) {
    this.props.navigator.push({
      name: "Todo",
      passProps: {
        listId
      }
    });
  }

  render() {
    return (
      <View style={{ padding: 50 }}>

        {Object.keys(this.state.todoList).map((value, index) => (
          <View
            style={styles.buttonview}
          >
            <Button
              key={index}
              title={value}
              onPress={this._navigator.bind(this, value)}
            />
          </View>
        ))}
        <View>
          <Button 
            onPress={this._navigator.bind(this, "new")} 
            title="+" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonview: {
    borderColor: '#f00',
    borderWidth: 2,
    
  }
})
