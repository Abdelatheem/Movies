import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getMovieGeners } from '../actions';

class Home extends Component {
  componentWillMount() {
    this.props.getMovieGeners();
  }

  renderGeners(){
    return this.props.geners.map(gener =>
      <Text>{gener.name}</Text>
      <TouchableOpacity key={event.id} onPress={() => this.selectEvent(event)}>
        <Card>
          
        </Card>
      </TouchableOpacity>
    );
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
    // email: state.auth.email,
  };
};

export default connect(mapStateToProps, { getMovieGeners })(Home);
