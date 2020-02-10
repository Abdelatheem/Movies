import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import axios from 'react-native-axios';
import styles from '../common/Styles';
import {
    BASE_URL,
    API_KEY,
  } from '../actions/types';

export class List extends Component {
    constructor(props){
        super(props)
        this.renderMovies(this.props.id);
        this.state = {
            generMovies: [],
            disable: false
        }
    }
    
    renderMovies(id){
        if(id){
            axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc&with_genres='+id)
            .then(result => {
                var result = Object.values(result.data)[3];
                // console.log(id)
                result.map(movie => {
                    var oneMovie = {id: movie.id, title: movie.title, poster_path: movie.poster_path}; 
                    this.props.generMovies.push(oneMovie)
                    this.setState({disable: false});
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
        }
    }
    render() {
        return (
            <FlatList
                data={this.props.generMovies}
                horizontal
                renderItem={({ item }) => <View key={item.id} style={{ width: 130 }}>
                <TouchableOpacity disabled={this.state.disable} onPress={() => { this.setState({disable: true}); this.props.moveDetails(item.id, item.poster_path)}}>
                <Image
                    style={{ width: 120, height: 170, borderRadius: 5 }}
                    source={{ uri: `https://image.tmdb.org/t/p/w342${item.poster_path}` }}
                    resizeMode="stretch"
                    />
                    <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
                    <Text style={{color: '#FFF', fontSize: 15}}>
                        {item.title}
                    </Text>
                    </View>
                </TouchableOpacity>  
                </View>}
                style={{ marginTop: 10 }}
                keyExtractor={(item, index) =>  `list-${item.id}-${index}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerContentStyle}
                ItemSeparatorComponent={() => <View style={{ marginEnd: 20 }} />} />
        )
    }
}
