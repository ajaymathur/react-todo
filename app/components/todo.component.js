import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet, AsyncStorage, Button} from 'react-native';

import { AddItem } from './addItem.component';
import ListOfTodo from './listofTodo.component';

export class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {name: [], completeList: []};
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

    __getUniqueId() {
        let uniqueId, now = new Date();
        'xxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            uniqueId = v.toString(16);
        });
        return uniqueId + now.getTime();
    }

    _getList = async() => {
        try {
            var that = this;
            let listIdTemp = this.props.listId;
            console.log(listIdTemp);
            if ( "new" === listIdTemp) {
                this.setState({
                    listName: that.__getUniqueId()
                }) 
            } else {
                this.setState({
                    listName: listIdTemp
                });
            }
            let value = await AsyncStorage.getItem('todoList');
            let parsedValue = JSON.parse(value);
            if (parsedValue != null && parsedValue[listIdTemp]) {
                this.setState({
                    'name': parsedValue[listIdTemp],
                    'completeList': parsedValue,
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
            let newName = [...this.state.name, tempObj];
            that.setState({
                name: newName,
            });

            let updatedListTemp = that.state.completeList || {};
            updatedListTemp[that.state.listName] = newName;
            //let newCompleteList = {...that.state.completeList, updatedListTemp};

            //let listName = this.state.listName;
            console.log('updated list : ', updatedListTemp)
            await AsyncStorage.setItem('todoList', JSON.stringify(updatedListTemp));
        } catch (e) {
            console.log(e);
        }
    }

    _navigator() {
        this.props.navigator.pop()
    }

    render() {
        return (
            <View style={styles.totoAddItem}>
                <AddItem
                    buttonAction={this._addItem}
                    style={styles.addSubmit}
                />
                <ListOfTodo
                    taskToggled={this._taskToggled.bind(this)}
                    dataList = {this.state.name}
                    style={styles.addItemForm}
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
