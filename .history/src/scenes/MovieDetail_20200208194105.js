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

    renderGeners(geners){
        return geners.map(gener => {
            <Text>{gener.name} /</Text>
        });
    }

  render() {
    const {backdrop_path, original_title, genres } = this.props.movieDetails
    return (
      <ScrollView style={styles.container}>
        {this.renderErrorMessage()}
        {this.renderLoadingIcon()}
        <View style={{flexDirection: 'column'}}>
                <Text style={styles.movieTitle}>{original_title}</Text>
                <Image style={styles.DetailImage} source={{ uri: `https://image.tmdb.org/t/p/w500${backdrop_path}` }} resizeMode="stretch" />
                <View style={{flexDirection: 'row'}}>
                    <Text>Geners: </Text> 
                    {this.renderGeners(genres)}
                </View>
        </View>
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

