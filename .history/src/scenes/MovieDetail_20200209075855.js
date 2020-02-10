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
        console.log(this.props)
        if(this.props.movieDetails){
            const {backdrop_path, genres, original_title, vote_count, vote_average, tagline } = this.props.movieDetails
            return  <View>
                    <Text style={styles.movieTitle}>{original_title}</Text>
                    <Text style={styles.movieTitle2}>{tagline}</Text>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w342${backdrop_path}` }} style={styles.DetailImage} />
                    <View style={styles.separator}/>
                    <Card>    
                    <View style={{flexDirection: 'row'}}>              
                    <Text style={styles.movieTitle}>Genres: </Text>
                    <Text style={styles.movieTitle3}>{genres.map(gener => <Text>{gener.name} </Text>)}</Text>
                    </View>  
                    </Card>
                </View>
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

