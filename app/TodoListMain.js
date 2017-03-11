import React, { Component } from "react";
import {
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Text,
  View
} from "react-native";

import { Todolist } from "./components/todoList.component";
import { Todo } from "./components/todo.component";

const DEFAULT_VIEW = 'Todolist';

var NavigationRouteMapper = {
  LeftButton(route, navigator) {
    if (route.name === "Todolist") {
      return null;
    } else {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Text style={styles.leftNav}>Back</Text>
        </TouchableHighlight>
      );
    }
  },

  RightButton(route, navigator) {
      return null;
  },
  Title(route, navigator) {
    return <Text style={styles.title}>Todo</Text>;
  }
};

export default class TodoListMain extends Component {
  initRenderScene = (route, navigator) => {
    if (route.name === "Todolist") {
      return (
        <View style={styles.Todolist}>
          <Todolist navigator={navigator} />
        </View>
      );
    }
    if (route.name === "Todo") {
      return (
        <View style={styles.Todo}>
          <Todo navigator={navigator} {...route.passProps} />
        </View>
      );
    }
  };

  renderScene = (route, navigator) => {
    return (
      <View style={styles.routerOutlet}>
        {this.initRenderScene(route, navigator)}
      </View>
    );
  };

  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{ name: DEFAULT_VIEW }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  Todolist: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  navBar: {
    paddingTop: 20,
    height: 64,
    backgroundColor: "#F4F4F4",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#DDDDDD",
    paddingHorizontal: 12,
    overflow: "hidden"
  },
  leftNav: {
    color: "#089de3",
    padding: 10
  },
  rightNav: {
    color: "#089de3",
    padding: 10
  },
  title: {
    fontWeight: "bold"
  },
  routerOutlet: {
    backgroundColor: "#fff",
    marginTop: 64,
    padding: 10,
    flex: 1
  }
});
