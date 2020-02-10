import React, { Component } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, Linking, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { renderMovieDetail, renderGenerDetail } from '../actions';
import { Icon } from 'react-native-elements'
import axios from 'react-native-axios';
import {
  BASE_URL,
  API_KEY,
  GET_MOIVES_GENERS,
  GET_GENER_DETAILS,
  ERROR,
} from '../actions/types';

let movies = [];
let counter = 2;
class GenerDetails extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.generDetails !== nextProps.generDetails) {
      return false;
    }
    return false;
  }

  constructor(props){
    super(props);
    this.getData(this.props.generDetails)
  }
  renderErrorMessage() {
      if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
      }
  }

  renderLoadingIcon() {
      if (this.props.loading) {
          return <Spinner size="small" />;
      }
  }    

  renderDate(date){
    if(date){
      return <Text style={{color: '#00d374', fontSize: 15}}> {date.split('-')[0]}</Text>
    } else {
      return <View />
    }
  }

  getData(data){
    var data1 = data.filter(function( element ) {
      return element !== undefined;
    });
    return data1.map(movie => {
      movie.results.map(result => movies.push(result)); 
    });
  }

  renderMovies(id, page){
    if(id){
        axios.get(BASE_URL + '/discover/movie?' + API_KEY + '&sort_by=popularity.desc&page='+page+'&with_genres='+id)
        .then(result => {
            var result = Object.values(result.data)[3];
            result.map(movie => {
              movies.push(movie)
            });
        })
        .catch((error) => {
            console.log(error.response);
        });
    }
}
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderErrorMessage()}
        {this.renderLoadingIcon()}
        <FlatList
          data={movies}
          renderItem={({ item }) => <View key={item.id} style={styles.populerViewStyle}>
          <TouchableOpacity onPress={() => { this.props.renderMovieDetail(item.id) }}>
            <Image
            style={{ width: '100%', height: 200, borderRadius: 5 }}
            source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
            resizeMode="stretch"
            />
            <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
            <Text style={{color: '#FFF', textAlign: 'center', fontSize: 19}}>
                {item.title}
            </Text>
            {this.renderDate(item.release_date)}
            <View style={{flexDirection: 'row'}}>
              <Icon name={'star'} iconStyle={{margin: 3}} type={'antdesign'} size={18} color="#f0c40e"/>
              <Text style={{color: '#FFF', textAlign: 'center', fontSize: 18}}>{item.vote_average}</Text>
            </View>
            </View>
          </TouchableOpacity>  
          </View>}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) =>  `list-${item.id}-${index}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerContentStyle}
          ItemSeparatorComponent={() => <View style={{ marginEnd: 20 }} />}
          onEndReached={() => { counter++; this.renderMovies(this.props.id,counter)}}
          onEndReachedThreshold={0.5} 
          />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    generDetails: state.home.generDetails,
    id: state.home.id,
  };
};

export default connect(mapStateToProps, {renderMovieDetail, renderGenerDetail})(GenerDetails);

