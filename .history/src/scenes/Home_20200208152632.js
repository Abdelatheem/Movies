import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, FlatList, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getMovieGeners, getMoviesByGener } from '../actions';
import axios from 'react-native-axios';

const DATA = [];

class List extends Component {
  constructor(props){
      super(props)
      this.renderMovies(this.props.id);
  }
  
  renderMovies(id){
      console.log(id)
  //     axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc&with_genres='+id)
  //     .then(result => {
  //         console.log(result.data)
  //     })
  //   .catch((error) => {
  //     console.log(error.response);
  //   });
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

class Home extends Component {

  renderGeners(){
    var geners = Object.values(this.props.geners)[0];
    if (geners.length > 0) {
      return geners.map(gener =>
        <View style={styles.MoviesStyle}>
        <Text style={styles.movieTitle}>{gener.name}</Text>
        <TouchableOpacity style={{position: 'absolute', left: '80%'}} key={gener.id}>
          <Text style={styles.viewAllStyle}>View All</Text>
        </TouchableOpacity>
        <List id={gener.id} />
        </View>
      );
    }
  }

  renderLoadingIcon() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
  }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderGeners()}
      </ScrollView> 
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.home.loading,
    error: state.home.error,
    geners: state.home.geners,
    generMovies: state.home.generMovies,
  };
};

export default connect(mapStateToProps, { getMovieGeners, getMoviesByGener })(Home);
