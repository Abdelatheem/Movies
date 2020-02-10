import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import axios from 'react-native-axios';
import styles from '../common/Styles';
import {
    BASE_URL,
    API_KEY,
  } from '../actions/types';

const generMovies = [];

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
                console.log(result.data)
            })
            .catch((error) => {
                console.log(error.response);
            });
        }
        // this.props.getMoviesByGener(id);
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
                    <Text style={{color: '#FFF', fontSize: 12}}>{item.release_date.split('-')[0]}</Text>
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
