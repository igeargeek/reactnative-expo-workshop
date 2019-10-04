import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight, FlatList, Image, ActivityIndicator } from 'react-native'
import { NavigationActions } from 'react-navigation';
import axios from 'axios';

export default class MoviesList extends Component {
    // static navigationOptions = {
    //     title: 'Movies Showtime Example',
    //     headerStyle: {
    //         backgroundColor: '#000',
    //         borderBottomWidth: 0
    //     },
    //     headerTintColor: '#fff'
    // };

    // state = {
    //     movies: [],
    //     loading: true
    // }

    // componentDidMount() {
    //     axios.get(`https://react-native-workshop-api.igeargeek.com/movie`)
    //         .then(res => {
    //         const movies = res.data;
    //         this.setState({ 
    //             movies,
    //             loading: false
    //          });
    //     })
    // }

    render() {
        // if (this.state.loading) {
        //     return(
        //         <View style={styles.loading}>
        //             <ActivityIndicator size="large" color="#000" />
        //         </View>
        //     )
        // }
        return (
            <View style={styles.container}>
                {/* <FlatList
                    data={this.state.movies}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                    <TouchableHighlight
                        style={styles.cardMovie}
                        activeOpacity={1}
                        onPress={() => 
                            this.props.navigation.navigate({ 
                                routeName: 'MovieDetail',
                                params: { id: item.id },
                            })
                        }>
                        <View style={styles.cardMovie}>
                            <Image source={{uri: item.image}}
                                style={styles.movieImage} />
                            <View style={{padding: 20}}>
                                <Text style={styles.textDate}>{item.show_date}</Text>
                                <Text style={styles.textTitle}>{item.title.th}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    }
                />
                 */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    textDate: {
        color: '#e1b12c'
    },
    textTitle: {
        color: '#fff',
        fontSize: 17,
        marginTop: 5,
        lineHeight: 25
    },
    cardMovie: {
        flex: 1, 
    },
    movieImage: {
        height: 300
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
