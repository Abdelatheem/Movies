import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { SearchBar } from 'react-native-elements';

class Search extends Component {
  renderErrorMessage() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>

          {this.renderErrorMessage()}
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    // email: state.auth.email,
  };
};

export default connect(mapStateToProps, {})(Search);
