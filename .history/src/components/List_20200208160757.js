import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import axios from 'react-native-axios';
import styles from '../common/Styles';
import {
    BASE_URL,
    API_KEY,
  } from '../actions/types';

const generMovies = [];
const generMovies2 = [];
export class List extends Component {
    constructor(props){
        super(props)
        this.renderMovies(this.props.id);
        this.state = {
            generMovies: [],
        }
    }
    
    renderMovies(id){
        if(id){
            axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc&with_genres='+id)
            .then(result => {
                var result = Object.values(result.data)[3];
                this.sorting(result);
            })
            .catch((error) => {
                console.log(error.response);
            });
        }
    }

    sorting(result){
        console.log(result);
        result.map(movie => {
            var oneMovie = {id: movie.id, title: movie.title, poster_path: movie.poster_path, release_date: movie.release_date};
            // this.setState({generMovies: this.state.generMovies.push(oneMovie)});
            generMovies.push(oneMovie)
        });
    }
    render() {
        return (
            <FlatList
                data={generMovies}
                horizontal
                renderItem={({ item }) =>  <View style={{ width: 130 }}>
                <TouchableOpacity>
                <Image
                    style={{ width: 120, height: 170, borderRadius: 5 }}
                    source={{ uri: `https://image.tmdb.org/t/p/w342${item.poster_path}` }}
                    resizeMode="stretch"
                    />
                    <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
                    <Text style={{color: '#FFF', fontSize: 15}}>
                        {item.title}
                    </Text>
                    <Text style={{color: '#FFF', fontSize: 20}}>{item.release_date.split('-')[0]}</Text>
                    </View>
                </TouchableOpacity>
                </View>}
                style={{ marginTop: 10 }}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.containerContentStyle}
                ItemSeparatorComponent={() => <View style={{ marginEnd: 20 }} />} />
        )
    }
}
