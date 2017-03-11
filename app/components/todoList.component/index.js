import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  AsyncStorage,
  Button,
  View,
  TouchableOpacity,
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
      AsyncStorage.removeItem('todoList');
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
      <View style={styles.taskCardsContainer}>
        {Object.keys(this.state.todoList).map((value, index) => (
          <TouchableOpacity
            style={styles.buttonview}
            key={index}
            onPress={this._navigator.bind(this, value)}
          >
            <View style={styles.inTileList}>
              {this.state.todoList[value].map((value, index ) => (
                <Text 
                  key={index}
                  style={value.completed === 0 ? styles.inListText : styles.inListTextCompleted}
                >{value.title}
                </Text>
              ))}
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.buttonview}
          onPress={this._navigator.bind(this, "new")}
        >
          <View style={styles.inTileAddList}>
              <Text
                style={styles.inAddListText}
              >+
              </Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskCardsContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonview: {
    borderColor: '#999999',
    borderWidth: 2,
    borderRadius: 5,
    height: 150,
    width: 150,
    marginBottom: 15,
  },
  inTileList: {
    padding: 10,
  },
  inListText: {
    color: '#929292'
  },
  inListTextCompleted: {
    color: '#929292',
    textDecorationLine: 'line-through',
  },
  inTileAddList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inAddListText: {
    fontSize: 100,
  }
})
