import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getMovieGeners } from '../actions';

class Home extends Component {

  renderGeners(){
    console.log('geners');
    console.log(Object.values(this.props.geners));
    if (this.props.geners && this.props.geners.length > 0) {
      return this.props.geners.map(gener =>
        <View style={styles.MoviesStyle}>
          <Text style={styles.movieTitle}>{gener.name}</Text>
          <TouchableOpacity key={gener.id}>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
        {this.renderGeners()}
        </Card>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    geners: state.home.geners,
  };
};

export default connect(mapStateToProps, { getMovieGeners })(Home);
