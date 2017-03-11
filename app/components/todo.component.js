import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet, AsyncStorage, Button} from 'react-native';

import { AddItem } from './addItem.component';
import ListOfTodo from './listofTodo.component';

export class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedList: [], completeList: {}};
    }

    componentDidMount() {
        this._getList().done();
    }

    /**
     * @author ajay narain mathur
     * @description This will pull the list as per the key received
     *              from the todo list screen
     * @type high priority
     */

     _getList = async() => {
        try {
            let that = this;
            let listIdTemp = this.props.listId;
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
            if ( parsedValue ) {
                this.setState({
                    'completeList': parsedValue,
                });
                if ( parsedValue[listIdTemp] ) {
                    this.setState({
                        'selectedList': parsedValue[listIdTemp],
                    });
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * @author ajay narain mathur
     * @param { index of the task in the list that is toggled } index 
     * @type priority high
     */

    _taskToggled(index) {
        try{
            let newList = [...this.state.selectedList];
            newList[index].completed = newList[index].completed === 0 ? 1 : 0;
            this.setState({
                selectedList: newList
            });
            this.__updateList(newList).done();
        } catch(e) {
            console.log(e);
        }
    }

    /**
     * @author ajay narain mathur
     * update the task list
     * @type priority high
     */
    __updateList = async( newSelectedTaskList ) => {
        let tempCompleteList = this.state.completeList || {};
        tempCompleteList[this.state.listName] = newSelectedTaskList;
        console.log(tempCompleteList);
        await AsyncStorage.setItem('todoList', JSON.stringify(tempCompleteList), error => { console.log(error);});
    }

    __getUniqueId() {
        let uniqueId, now = new Date();
        'xxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            uniqueId = v.toString(16);
        });
        return uniqueId + now.getTime();
    }

    /**
     * @author ajay narain mathur
     * @description This method is used to add item to the list
     * @type priority high
     * @version 0.0.0
     */
    _addItem = async(e) => {
        try {
            var that = this;
            let tempObj = {title: e, completed: 0};
            let newSelectedTaskList = [...this.state.selectedList, tempObj];
            that.setState({
                selectedList: newSelectedTaskList,
            });
            this.__updateList( newSelectedTaskList ).done();
            
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
                    dataList={this.state.selectedList}
                    style={styles.addItemForm}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    toDoAddItem: {
        flex: 1
    },
    addItemForm: {
        //height: 80,
    },
    addSubmit: {
        //height: 20
    }

})
