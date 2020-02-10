import React, { Component } from 'react';
import { TouchableOpacity,ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getPopulerMovies, renderMovieDetail } from '../actions';

class Populer extends Component {

  constructor(props){
    super(props);
    this.props.getPopulerMovies();
  }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  renderResults(){
    if(this.props.results){
      if(this.props.results.results.length == 0){
        return <View style={{flex: 1}}><Text style={styles.errorStyle}>No Results Were Found!</Text></View>;
      }
      return this.props.reults.results.map((result, i) => 
        <View key={i} style={styles.resultViewStyle}>
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
    if(this.props.results){
      return (
        <ScrollView style={styles.container}>
            {this.renderErrorMessage()}
            <View style={styles.results}>
            {this.renderResults()}
            </View>
        </ScrollView>
      );
    } else {
      return <Spinner size="small" />;
    }
  }
}
const mapStateToProps = state => {
  return {
    results: state.populer.results,
  };
};

export default connect(mapStateToProps, { getPopulerMovies, renderMovieDetail })(Populer);
