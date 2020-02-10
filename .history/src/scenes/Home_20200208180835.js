import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import { List } from '../components/List';
import styles from '../common/Styles';
import { getMovieGeners, MovieDetail } from '../actions';

class Home extends Component {

  renderGeners(){
    var geners = Object.values(this.props.geners)[0];
    if (geners.length > 0) {
      return geners.map((gener, i) =>
        <View style={{flexDirection: 'column'}}>
        <Text style={styles.movieTitle}>{gener.name}</Text>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(255, 255, 255, 0.1)'}}/>
        <List id={gener.id} index={i} generMovies={[]} moveDetails={this.moveDetails} />
        </View>
      );
    }
  }

  moveDetails(id){
    this.props.MovieDetail(id);
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
  };
};

export default connect(mapStateToProps, { getMovieGeners, MovieDetail })(Home);
