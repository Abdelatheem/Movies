import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { SearchBar } from 'react-native-elements';
import { getMoviesByName, renderMovieDetail } from '../actions';
import { Icon } from 'react-native-elements'

class Search extends Component {
  constructor(props){
    super(props);
    this.state= {
      text: '',
      loading: false
    }
  }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  updateSearch(search) {
    this.setState({loading: true, text:  search});
    if(search){
      this.props.getMoviesByName(search);
    }
  };

  renderResults(){
    if(this.props.searchReults){
      if(this.props.searchReults.results.length == 0){
        return <View style={{flex: 1}}><Text style={styles.errorStyle}>No Results Were Found!</Text></View>;
      }
      return this.props.searchReults.results.map((result, i) => 
      <View key={i} style={styles.populerViewStyle}>
          <TouchableOpacity onPress={() => this.props.renderMovieDetail(result.id)}>
              <Image
              style={{ width: '100%', height: 200, borderRadius: 5 }}
              source={{ uri: `https://image.tmdb.org/t/p/original${result.poster_path}` }}
              resizeMode="stretch"
              />
              <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
              <Text style={{color: '#FFF', textAlign: 'center', fontSize: 19}}>
                  {result.title}
              </Text>
              {this.renderDate(result.release_date)}
              <View style={{flexDirection: 'row'}}>
                <Icon name={'star'} iconStyle={{margin: 3}} type={'antdesign'} size={20} color="#fff"/>
                <Text style={{color: '#FFF', textAlign: 'center', fontSize: 20}}>{result.vote_average}</Text>
             </View>
              </View>
          </TouchableOpacity>  
        </View>
      );
    } else {
      return <View />;
    }
    this.setState({loading: false});
  }

  renderDate(date){
    if(date){
      return <Text style={{color: '#00d374', fontSize: 15}}> {date.split('-')[0]}</Text>
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
            containerStyle={{backgroundColor: '#000'}}
            inputContainerStyle={{borderRadius: 10, backgroundColor: '#ddd'}}
            inputStyle={{color: '#000'}}
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

export default connect(mapStateToProps, { getMoviesByName, renderMovieDetail })(Search);
