import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button, List } from '../components/common';
import styles from '../common/Styles';
import { getMovieGeners, getMoviesByGener } from '../actions';

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
