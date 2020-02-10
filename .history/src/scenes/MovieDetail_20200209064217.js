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

    // renderDetails(){
    //     if(this.props.movieDetails){
            
    //         return 
    //     } else {
    //         return <Text style={styles.movieTitle}>No Data Were Found!</Text>
    //     }
    // }

  render() {
    if(this.props.movieDetails){
        const {poster_path, original_title } = this.props.movieDetails
    }
    return (
        <ScrollView style={styles.container}>
        <Card>
          <Image source={require('../resources/images/logo.png')} style={{ alignSelf: 'center', width: '50%', resizeMode: 'contain' }} />
          <View style={{ paddingTop: 40 }}>
          {this.renderErrorMessage()}
          {this.renderLoadingIcon()}
          </View>
        </Card>
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

