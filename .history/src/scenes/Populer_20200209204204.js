import React, { Component } from 'react';
import { TouchableOpacity,ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getPopulerMovies, renderMovieDetail } from '../actions';

let counter = 1;
class Populer extends Component {

  constructor(props){
    super(props);
    this.props.getPopulerMovies(counter);
  }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  renderResults(){
    if(this.props.moviesResults){
      if(this.props.moviesResults.results.length == 0){
        return <View style={{flex: 1}}><Text style={styles.errorStyle}>No Results Were Found!</Text></View>;
      }
      return <FlatList
          data={this.props.moviesResults.results}
          horizontal
          renderItem={({ result, i }) => <View key={i} style={styles.populerViewStyle}>
          <TouchableOpacity onPress={() => this.props.renderMovieDetail(result.id, result.poster_path)}>
              <Image
              style={{ width: '100%', height: 200, borderRadius: 5 }}
              source={{ uri: `https://image.tmdb.org/t/p/original${result.poster_path}` }}
              resizeMode="stretch"
              />
              <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
              <Text style={{color: '#FFF',textAlign: 'center', fontSize: 19}}>
                  {result.title}
              </Text>
              {this.renderDate(result.release_date)}
              </View>
          </TouchableOpacity>  
        </View>}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) =>  `list-${item.id}-${index}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerContentStyle}
          ItemSeparatorComponent={() => <View style={{ marginEnd: 20 }} />}
          onEndReached={() => { counter++; this.getPopulerMovies(counter)}}
          onEndReachedThreshold={0.5} />        
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
    moviesResults: state.populer.moviesResults,
  };
};

export default connect(mapStateToProps, { getPopulerMovies, renderMovieDetail })(Populer);
