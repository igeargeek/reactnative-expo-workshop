import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight, FlatList, Image } from 'react-native'
import { NavigationActions } from 'react-navigation';
import axios from 'axios';

export default class MoviesList extends Component {
    static navigationOptions = {
        title: 'Movies Showtime Example',
        headerStyle: {
            backgroundColor: '#000',
            borderBottomWidth: 0
        },
        

    };

    componentDidMount() {
        axios.get(`https://react-native-workshop-api.igeargeek.com/movie`)
            .then(res => {
            const movies = res.data;
            this.setState({ 
                movies,
                loading: false
             });
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'd'}, {key: 'd'}]}
                    numColumns={2}
                    renderItem={({item}) => 
                    <TouchableHighlight
                        style={styles.cardMovie}
                        activeOpacity={1}
                        onPress={() => 
                            this.props.navigation.dispatch(NavigationActions.navigate({ 
                                routeName: 'MovieDetail',
                                params: { id: item.key },
                            }))
                        }>
                        <View style={styles.movieImage}>
                            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                                style={styles.movieImage} />
                            <View style={{padding: 20}}>
                                <Text style={styles.textDate}>22 สิงหาคม 2019</Text>
                                <Text style={styles.textTitle}>ชื่อหนังแบบตัวอย่าง</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    }
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50
    },
    textDate: {
        color: '#e1b12c'
    },
    textTitle: {
        color: '#fff',
        fontSize: 17,
        marginTop: 5
    },
    cardMovie: {
        flex: 1, 
        height: 350
    },
    movieImage: {
        flex: 1
    }
})
