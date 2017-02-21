import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet, AsyncStorage} from 'react-native';

import { AddItem } from './addItem.component';
import ListOfTodo from './listofTodo.component';

export class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ['Ajay']}
    }

    componentDidMount() {
        this._getList().done();
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
            let newName = [...this.state.name, e]
            that.setState({
                name: newName
            })
            let listName = 'testing';
            await AsyncStorage.setItem(listName, JSON.stringify([...this.state.name, e]))            
        } catch (e) {
            console.log(e);
        }
    }

    _navigator() {
        this.props.navigator.pop()
    }

    render() {
        return (
            <View style={todoStyles.totoAddItem}>
                <ListOfTodo
                    dataList = {this.state.name}
                />
                <AddItem
                    buttonAction={this._addItem}
                />
            </View>
        );
    }
}

var todoStyles = StyleSheet.create({
    totoAddItem:{
    }
})
