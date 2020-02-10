import React, { PureComponent } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import axios from 'react-native-axios';
import styles from '../common/Styles';
import {
    BASE_URL,
    API_KEY,
  } from '../actions/types';

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

    renderDate(date){
    if(date){
        return <Text style={{color: '#00d374', fontSize: 15}}> {date}</Text>
    } else {
        return <View />
    }
    }

    render() {
        return (
            <FlatList
                data={this.props.generMovies}
                horizontal
                renderItem={({ item }) => <View key={item.id} style={{ width: 130 }}>
                <TouchableOpacity onPress={() => { !this.state.inClick ? this.onClickButton(item.id, item.poster_path) : null }}  disabled={isDisabled}>
                    <Image
                    style={{ width: 120, height: 170, borderRadius: 5 }}
                    source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                    resizeMode="stretch"
                    />
                    <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
                    <Text style={{color: '#FFF', fontSize: 15}}>
                        {item.title}
                    </Text>
                    <Text style={{color: '#00d374', fontSize: 15}}>{item.vote_average}</Text>
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
