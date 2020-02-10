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

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          {this.renderErrorMessage()}
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchReults: state.search.searchReults,
  };
};

export default connect(mapStateToProps, {})(Search);
