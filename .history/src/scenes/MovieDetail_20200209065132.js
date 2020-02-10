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

    renderLoadingIcon() {
        if (this.props.loading) {
            return <Spinner size="small" />;
        }
    }

    renderDetails(){
        console.log(this.props.movieDetails)
        if(this.props.movieDetails){
            const {poster_path, original_title } = this.props.movieDetails
            return <Card>
                    <Text style={styles.movieTitle}>{original_title}</Text>
                    {/* <Image 
                    style={{ width: 120, height: 170, borderRadius: 5 }}
                    source={ require('../resources/images/logo.png') }
                    resizeMode="stretch" */}
                     {/* source={{ uri: `https://image.tmdb.org/t/p/w342${this.props.movieDetails.poster_path}` }}  */}
                    {/* /> */}
                    <Image source={{ uri: `https://image.tmdb.org/t/p/original${poster_path}` }} style={{ alignSelf: 'center', width: '50%', resizeMode: 'contain' }} />
                    <Text>Type</Text>
            </Card>
        } else {
            return <Text style={styles.movieTitle}>No Data Were Found!</Text>
        }
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderErrorMessage()}
        {this.renderLoadingIcon()}
        {this.renderDetails()}
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieDetails: state.home.movieDetails,
  };
};

export default connect(mapStateToProps, {})(MovieDetail);

