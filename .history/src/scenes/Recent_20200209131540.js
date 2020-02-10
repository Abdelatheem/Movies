import React, { Component } from 'react';
import { TouchableOpacity,ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getRecentMovies, renderMovieDetail } from '../actions';

class Recent extends Component {

  constructor(props){
    super(props);
    this.props.getRecentMovies();
  }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  renderResults(){
    console.log(this.props.moviesResults)
    if(this.props.moviesResults){
      if(this.props.moviesResults.results.length == 0){
        return <View style={{flex: 1}}><Text style={styles.errorStyle}>No Results Were Found!</Text></View>;
      }
      return this.props.moviesResults.results.map((result, i) => 
        <View key={i} style={styles.populerViewStyle}>
          <TouchableOpacity onPress={() => this.props.renderMovieDetail(result.id, result.poster_path)}>
              <Image
              style={{ width: '100%', height: 200, borderRadius: 5 }}
              source={{ uri: `https://image.tmdb.org/t/p/w342${result.poster_path}` }}
              resizeMode="stretch"
              />
              <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
              <Text style={{color: '#FFF', fontSize: 19}}>
                  {result.title}
              </Text>
              {this.renderDate(result.release_date)}
              <Text style={{color: '#00d374', fontSize: 15}}>{result.original_language}</Text>
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
      return <Text style={{color: '#00d374', fontSize: 15}}> {date}</Text>
    } else {
      return <View />
    }
  }

  render() {
      return (
        <ScrollView style={styles.container}>
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
    moviesResults: state.recent.moviesResults,
  };
};

export default connect(mapStateToProps, { getRecentMovies, renderMovieDetail })(Recent);
