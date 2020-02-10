import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getMovieGeners, getMoviesByGener } from '../actions';
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_MOIVES_GENERS,
  GET_MOIVES_BY_GENER,
  ERROR,
} from '../actions/types';

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
        {this.renderMovies(gener.id)}
        </View>
      );
    }
  }

  renderMovies(id){
    axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc&with_genres='+id)
      .then(result => {
        console.log(result.data)
        var generMovies = Object.values(result.data)[4];
        console.log('generMovies');
        console.log(generMovies);
        if (generMovies.length > 0) {
          return generMovies.map(movie =>
            <View style={styles.MoviesStyle}>
            {movie.title} 
            </View>
          );
        }
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: ERROR });
      });
    // this.props.getMoviesByGener(id);
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
