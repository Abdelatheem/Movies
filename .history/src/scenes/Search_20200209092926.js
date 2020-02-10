import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { SearchBar } from 'react-native-elements';
import { getMoviesByName, moveDetails } from '../actions';

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
          <TouchableOpacity onPress={() => this.props.moveDetails(result.id, result.poster_path)}>
              <Image
              style={{ width: '100%', height: 200, borderRadius: 5 }}
              source={{ uri: `https://image.tmdb.org/t/p/w342${result.poster_path}` }}
              resizeMode="stretch"
              />
              <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
              <Text style={{color: '#FFF', fontSize: 19}}>
                  {result.title}
              </Text>
              <Text style={{color: '#00d374', fontSize: 15}}>
                  {result.release_date}
              </Text>
              </View>
          </TouchableOpacity>  
        </View>
      );
    } else {
      return <View />
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

export default connect(mapStateToProps, { getMoviesByName, moveDetails })(Search);
