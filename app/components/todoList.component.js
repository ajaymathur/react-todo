import React, {Component} from 'react';
import {Text, TouchableHighlight, AsyncStorage, Button, View} from 'react-native';
import { store } from '../store/store';

export class Todolist extends Component {

    constructor(props) {
        super(props);
        store.subscribe(() => {
            console.log('store changed', store.getState());
        });
        store.dispatch({type: 'ADD_TODO', payload: 'Ajay'});
        store.dispatch({type: 'ADD_TODO', payload: 'Ajay Mathur'});
        this.state = {
            task: []
        }
    }

    componentDidMount() {
       this._populateStorage().done();
    }

    _populateStorage = async() => {
        try{
            await AsyncStorage.setItem('testing', JSON.stringify({name: 'Ajay from teting'}))
            console.log('successfully set')
        } catch (e) {
            console.log(e)
        }
    }

    _getItemStorage = async() => {
        try {
            var value = await AsyncStorage.getItem('testing');
            console.log(value);
        } catch (e) {
            console.log(e)
        }
        return null;
    }

    _navigator() {
        // this.props.navigator.push({
        //     name: 'Todo'
        // })
        return null;
    }

    render() {
        return (
            <View style={{padding: 50}} onPress={ this._navigator.bind(this) }>
                <Text>Go to todo</Text>
                <Button
                    title='click to pick async storage'
                    onPress={ this._getItemStorage.bind(this) }
                ></Button>
            </View>
        );
    }
}
