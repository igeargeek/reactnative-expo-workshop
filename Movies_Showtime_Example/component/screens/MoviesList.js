import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';

export default class MoviesList extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => 
                        this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'MovieDetail' }))}
                    >
                    <Text style={styles.text}> MoviesList </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#000'
    },
    text: {
        color: '#fff'
    }
})
