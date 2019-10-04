import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ActivityIndicator, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview';
import axios from 'axios';

export default class MovieDetail extends Component {
    // static navigationOptions = {
    //     headerStyle: {
    //         backgroundColor: '#000',
    //         borderBottomWidth: 0
    //     },
    //     headerTintColor: '#fff'
    // };

    // state = {
    //     movieData: [],
    //     loading: true
    // }

    // componentDidMount() {
    //     const itemId = this.props.navigation.getParam('id');
    //     axios.get(`https://react-native-workshop-api.igeargeek.com/movie/${itemId}`)
    //         .then(res => {
    //         const movieData = res.data;
    //         this.setState({ 
    //             movieData,
    //             loading: false
    //          });
    //     })
    // }
    
    render() {
        // const { movieData } = this.state
        // if (this.state.loading) {
        //     return(
        //         <View style={styles.loading}>
        //             <ActivityIndicator size="large" color="#000" />
        //         </View>
        //     )
        // }
        return (
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
                {/* <WebView
                    style={styles.videoLayout}
                    source={{uri: movieData.video}}
                />
                <View style={styles.movieInfoToplayout}>
                    <View style={styles.movieInfoView}>
                        <Image source={{uri: movieData.image}} 
                            style={{flex: 1}} />
                        <View style={{flex: 2, marginLeft: 15}}>
                            <Text style={styles.textMovieTitle}>{movieData.title.th}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.textMovieDetail}>ประเภท: </Text>
                                {movieData.categories.map((item, index) => {
                                    return(
                                        <Text key={index} style={styles.textMovieDetail}>{item} </Text>
                                    )
                                })}
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.textMovieDetail}>วันที่เข้าฉาย: </Text>
                                <Text style={styles.textMovieDetail}>{movieData.show_date}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.textMovieDetail}>ระยะเวลา: </Text>
                                <Text style={styles.textMovieDetail}>{movieData.running_time}นาที</Text>
                            </View>
                        </View>
                    </View>
                    <View
                    style={styles.underLine}
                    />
                    <View style={{flex: 3}}>
                        <View style={styles.movieBottomLayout}>
                            <View style={{flex: 1}}>
                                <Text style={styles.textMovieInfo}>ผู้กำกับ</Text>
                                <Text style={styles.textMovieInfo}>{movieData.director}</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={styles.textMovieInfo}>นักแสดง</Text>
                                <Text style={styles.textMovieInfo}>{movieData.actor}</Text>
                            </View>
                        </View>
                        <Text style={styles.textMovieInfo}>เรื่องย่อ</Text>
                        <Text style={styles.descriptionMovie}>{movieData.description}</Text>
                    </View>
                </View> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    videoLayout: {
        flex:1,
        height: 200
    },
    movieInfoToplayout: {
        flex: 2, 
        backgroundColor: '#362420', 
        padding: 15
    },
    movieInfoView: {
        flex: 2, 
        flexDirection: 'row'
    },
    underLine: {
        borderBottomColor: '#fff',
        borderBottomWidth: 0.3,
        marginVertical: 15
    },
    movieBottomLayout: {
        flexDirection: 'row', 
        paddingBottom: 20
    },
    textMovieInfo: {
        color: '#fff',
        fontSize: 15
    },
    descriptionMovie: {
        color: '#fff',
        fontSize: 13,
        lineHeight: 18
    },
    textMovieTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMovieDetail: {
        color: '#fff',
        fontSize: 13,
        marginBottom: 10
    }
})
