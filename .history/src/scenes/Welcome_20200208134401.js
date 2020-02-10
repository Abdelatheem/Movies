import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getMovieGeners, getMoviesByGener } from '../actions';

let datalist = [];
class Welcome extends Component {
  async loadMovies() {
    var geners = Object.values(this.props.geners)[0];
    if (geners.length > 0) {
      await geners.map(gener => {
        console.log('----------------------------------------------------------');
        console.log(this.props.getMoviesByGener(gener.id));
        console.log('----------------------------------------------------------');
      });
      Actions.Home();
    }
  }
  constructor(){
    super(props);
    this.props.getMovieGeners();
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
        <Card>
          <Image source={require('../resources/images/logo.png')} style={{ alignSelf: 'center', width: '50%', resizeMode: 'contain' }} />
          <View style={{ paddingTop: 40 }}>
          {this.renderErrorMessage()}
          {this.renderLoadingIcon()}
          {this.loadMovies()} 
          </View>
        </Card>
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

export default connect(mapStateToProps, { getMovieGeners, getMoviesByGener })(Welcome);
