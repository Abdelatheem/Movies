import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { SearchBar } from 'react-native-elements';
import { getMoviesByName } from '../actions';

class Search extends Component {
  constructor(props){
    super(props);
    this.state= {
      text: '',
    }
  }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  updateSearch(search) {
    this.setState({ text:  search});
    this.props.getMoviesByName(search);
  };

  renderResults(){
    if(this.props.searchReults){
      return this.props.searchReults.results.map(result => 
        <View style={styles.resultViewStyle}>
          <TouchableOpacity onPress={() => this.selectCategory('Rodeos')}>
            <Image source={require('../resources/images/GeneralRodeo.png')} style={styles.categoryImageStyleBordered} />
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <SearchBar
            placeholder="Type Movie Name..."
            onChangeText={(search) => this.updateSearch(search)}
            value={this.state.text}
          />
          {this.renderErrorMessage()}
          <View style={styles.results}>
          {this.renderResults()}
          </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchReults: state.search.searchReults,
  };
};

export default connect(mapStateToProps, { getMoviesByName })(Search);
