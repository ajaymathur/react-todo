import React, {Component, propTypes} from 'react';
import {Text, TouchableHighlight, TextInput, View, Button, StyleSheet,TouchableOpacity} from 'react-native';
 import { CustomButton } from './shared/defaultBtnComponent';
export class AddItem extends Component {

    static propTypes = {
        buttonAction: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { text : 'Placeholder'}
    };

    _addItem() {
        this.props.buttonAction(this.state.text);
    }

    render() {
        return (
            <View style={styles.addItem}>
                <TextInput
                style = {styles.textBox}
                onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                {/*<CustomButton onPress={this._addItem.bind(this)}/>*/}
                <TouchableHighlight
                    onPress={this._addItem.bind(this)}
                     style={styles.defaultBtn}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableHighlight>
                {/*<View>
                    <CustomButton />
                </View>*/}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    
    addItem:{
        //alignItems:'flex-end'
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    textBox:{
        flex:2,
        borderColor:'#ccc',
        borderWidth:1,
        height:40,
        paddingLeft:10


    },
    defaultBtn:{
       //flex:1
       //cursor:pointer
       padding:5,
       backgroundColor:'#089de3',
       borderRadius:2,
       //color:'#ffffff', 
       justifyContent:'center'
       
    },
    btnText:{
    color:'#FFF',
    fontWeight:'bold'
    }
   
})
