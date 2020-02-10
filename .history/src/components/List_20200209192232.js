import React, { PureComponent } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import axios from 'react-native-axios';
import styles from '../common/Styles';
import {
    BASE_URL,
    API_KEY,
  } from '../actions/types';
import imageCacheHoc from 'react-native-image-cache-hoc';

  const CacheableImage = imageCacheHoc(Image, {
    fileHostWhitelist: ['i.redd.it']
  });
let isDisabled = false;
let counter = 1;
export class List extends PureComponent  {
    constructor(props){
        super(props)
        this.renderMovies(this.props.id, counter);
        this.state = {
            generMovies: [],
            inClick: false
        }
    }
    
    renderMovies(id, page){
        if(id){
            axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc&page='+page+'&with_genres='+id)
            .then(result => {
                var result = Object.values(result.data)[3];
                // console.log(id)
                result.map(movie => {
                    var oneMovie = {id: movie.id, title: movie.title, poster_path: movie.poster_path}; 
                    this.props.generMovies.push(oneMovie)
                });
                isDisabled = false
            })
            .catch((error) => {
                console.log(error.response);
            });
        }
    }

    onClickButton(id,poster_path ) {
        this.setState({ inClick: true })
        this.props.moveDetails(id, poster_path)
        setTimeout(function() { this.setState({inClick: false}); }.bind(this), 2000);
    }

    render() {
        return (
            <FlatList
                data={this.props.generMovies}
                horizontal
                renderItem={({ item }) => <View key={item.id} style={{ width: 130 }}>
                <TouchableOpacity onPress={() => { !this.state.inClick ? this.onClickButton(item.id, item.poster_path) : null }}  disabled={isDisabled}>
                <CacheableImage 
                    style={{ width: 120, height: 170, borderRadius: 5, resizeMode: 'stretch' }}
                    source={{ uri: `https://image.tmdb.org/t/p/w342${item.poster_path}` }}
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
                ItemSeparatorComponent={() => <View style={{ marginEnd: 20 }} />}
                onEndReached={() => { counter++; this.renderMovies(this.props.id,counter)}}
                onEndReachedThreshold={0.5} />
        )
    }
}
