import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';

class MovieDetail extends Component {

    renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          {this.renderErrorMessage()}
        </Card>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    email: state.home.email,
  };
};

export default connect(mapStateToProps, {})(MovieDetail);

