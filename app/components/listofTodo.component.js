import React, {Component, PropTypes} from 'react';
import {View, ListView, Text, StyleSheet} from 'react-native';

class ListofTodo extends Component {

    constructor(props) {
        super(props);
    }

    taskToggled(rowId) {
        this.props.taskToggled(rowId);
    }

    _stylesCalculator(isCompleted) {
        var obj = {
            fontSize: 20,
            backgroundColor: '#00ff00',
        }
        return isCompleted === 0 ? obj : {...obj, textDecorationLine: 'line-through'}
    }

    render() {
        const {dataList} = this.props;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataRows = ds.cloneWithRows(dataList);
        return(
            <ListView
                style={ styles.toDoList}
                dataSource = {dataRows}
                renderRow={(rowData, sectionId,rowId) => 
                        <View style={styles.listview}>
                            <Text onPress= {this.taskToggled.bind(this, rowId)}
                                style={rowData.completed === 0 ? styles.list : styles.listCompleted}
                            >{rowData.title}</Text>
                        </View>
                    }
            />
        )
    }
}

const styles = StyleSheet.create({
    toDoList:{
        padding:10,
        marginTop:10
    },
    list: {
        fontSize: 20,
    },
    listCompleted: {
        fontSize: 20,
        textDecorationLine: 'line-through'
    },
    listview: {
        borderBottomWidth: 2,
        borderBottomColor: '#c2d2c2',
        padding: 5,

    }
})

export default ListofTodo;
