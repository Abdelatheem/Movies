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
            const {backdrop_path, adult, budget, revenue, genres, status, spoken_languages, overview, original_title, release_date, vote_count, vote_average, tagline } = this.props.movieDetails
            return  <View>
                    <Text style={styles.movieTitle}>{original_title}</Text>
                    <Text style={styles.movieTitle2}>{tagline}</Text>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w342${backdrop_path}` }} style={styles.DetailImage} />
                    <View style={styles.separator}/>
                    <Card> 
                    <Text style={styles.movieTitle1}>Release Date: </Text>
                    <Text style={styles.movieTitle3}>{release_date}</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Genres: </Text>
                    <View style={{flexDirection: 'column'}}>{genres.map(gener => <Text style={styles.movieTitle3}>{gener.name} </Text>)}</View>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Vote Average: </Text>
                    <Text style={styles.movieTitle3}>{vote_average}  ({vote_count} Votes)</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Overview: </Text>
                    <Text style={styles.movieTitle3}>{overview}</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Status: </Text>
                    <Text style={styles.movieTitle3}>{status}</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Spoken Languages: </Text>
                    <View style={{flexDirection: 'column'}}>{spoken_languages.map((l, i) => <Text key={i} style={styles.movieTitle3}>{l.name} </Text>)}</View>
                    <View style={styles.separator}/>
                    {this.loadAdult(adult)}
                    {this.loadBudgetRevenue(budget, revenue)}
                    </Card>
                </View>
        } else {
            return <Text style={styles.movieTitle}>No Data Were Found!</Text>
        }
    }

    loadBudgetRevenue(budget, revenue){
        if(budget && revenue){
            return <View>
            <Text style={styles.movieTitle1}>Budget: </Text>
            <Text style={styles.movieTitle3}>{budget}$</Text>
            <View style={styles.separator}/>
            <Text style={styles.movieTitle1}>Revenue: </Text>
            <Text style={styles.movieTitle3}>{revenue}$</Text>
            <View style={styles.separator}/>
            </View>
        } else if(budget) {
            return <View>
            <Text style={styles.movieTitle1}>Budget: </Text>
            <Text style={styles.movieTitle3}>{budget}$</Text>
            <View style={styles.separator}/>
            </View>
        } else if (revenue) {
            return <View>
            <Text style={styles.movieTitle1}>Revenue: </Text>
            <Text style={styles.movieTitle3}>{revenue}$</Text>
            <View style={styles.separator}/>
            </View>
        } else {
            return <View />
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

