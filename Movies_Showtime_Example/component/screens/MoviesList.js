import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation';

export default class MoviesList extends Component {
    static navigationOptions = {
        title: 'Movies Showtime Example',
        headerStyle: {
          backgroundColor: '#000',
          borderBottom: 0
        },
        headerTintColor: '#fff',    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => 
                        this.props.navigation.navigate({ routeName: 'MovieDetail' })}
                    >
                    <Text style={styles.text}>Go to MoviesList</Text>
                </TouchableHighlight>
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
