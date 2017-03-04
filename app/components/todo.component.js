import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet, AsyncStorage, Button} from 'react-native';

import { AddItem } from './addItem.component';
import ListOfTodo from './listofTodo.component';

export class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {name: [{title: 'Ajay',completed: 0, id: 0}, {title: 'Ajay second', completed: 1, id: 1}]};
    }

    componentDidMount() {
        this._getList().done();
        //this.__resetSynStore().done();
    }

    _taskToggled(index) {
        try{
            console.log("called form task toffle");
            let newList = [...this.state.name];
            console.log(index, newList);
            newList[index].completed = newList[index].completed === 0 ? 1 : 0;
            this.setState({
                name: newList
            })
        } catch(e) {
            console.log(e);
        }
    }

    __resetSynStore = async() => {
        try {
            await AsyncStorage.removeItem('testing')
        } catch(e) {
            console.log(e);
        }
    }

    _getList = async() => {
        try {
            let listName = 'testing';
            let value = await AsyncStorage.getItem(listName);
            if (value != null) {
                this.setState({
                    'name': JSON.parse(value),
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    _addItem = async(e) => {
        
        try {
            var that = this;
            console.log('button clicked', e);
            let tempObj = {title: e, completed: 0, id: this.state.name.length};
            let newName = [...this.state.name, tempObj]
            that.setState({
                name: newName
            })
            let listName = 'testing';
            await AsyncStorage.setItem(listName, JSON.stringify([...this.state.name, tempObj]))            
        } catch (e) {
            console.log(e);
        }
    }

    _navigator() {
        this.props.navigator.pop()
    }

    render() {
        console.log(this.props.listId);
        return (
            <View style={styles.totoAddItem}>
                <ListOfTodo
                    taskToggled={this._taskToggled.bind(this)}
                    dataList = {this.state.name}
                    style={styles.addItemForm}
                />
                <AddItem
                    buttonAction={this._addItem}
                    style={styles.addSubmit}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toDoAddItem: {
        flex: 1,
    },
    addItemForm: {
        height: 80,
    },
    addSubmit: {
        height: 20
    }
})
