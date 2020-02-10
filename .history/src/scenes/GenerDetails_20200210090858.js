import React, { Component } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, Linking, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';

class GenerDetails extends Component {

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

    getIndex(title) {
      return this.props.views.findIndex(obj => obj.title === title);
    }
    

    renderDetails(){
        if(this.props.movieDetails){
            const {backdrop_path, adult, budget,homepage, revenue, popularity, genres, status, spoken_languages, overview, original_title, release_date, vote_count, vote_average, tagline } = this.props.movieDetails
            var inArr = [];
            this.props.views.map(movie => movie.title == original_title ? inArr.push(true) : inArr.push(false))
            if(inArr.includes(true)){
              this.props.views.map(movie => movie.title == original_title ? movie.viewsNum = Number(movie.viewsNum) + 1 : movie.viewsNum = movie.viewsNum)
            } else {
              this.props.views.push({title: original_title, viewsNum: 1})
            }
            var index = this.getIndex(original_title);
            var totalViews = this.props.views[index].viewsNum;
            return  <View>
                    <Text style={styles.movieTitle}>{original_title}</Text>
                    <Text style={styles.movieTitle2}>{tagline}</Text>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/original${backdrop_path}` }} style={styles.DetailImage} />
                    <View style={styles.separator}/>
                    <Card> 
                    <Text style={styles.movieTitle1}>Total Views: </Text>
                    <Text style={styles.movieTitle3}>{totalViews}</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Release Date: </Text>
                    <Text style={styles.movieTitle3}>{release_date}</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Genres: </Text>
                    <View style={{flexDirection: 'column'}}>{genres.map((gener, i) => <Text key={i} style={styles.movieTitle3}>{gener.name} </Text>)}</View>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>popularity: </Text>
                    <Text style={styles.movieTitle3}>{popularity}</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Vote Average: </Text>
                    <Text style={styles.movieTitle3}>{vote_average}/10  ({vote_count} Votes)</Text>
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
                    <Text style={styles.movieTitle1}>Adult: </Text>
                    <Text style={styles.movieTitle3}>{adult == false ? 'false' : 'true'}</Text>
                    <View style={styles.separator}/>
                    <Text style={styles.movieTitle1}>Movie Website: </Text>
                    <TouchableOpacity onPress={() => Linking.openURL(homepage).catch((err) => console.error('An error occurred', err))}>
                    <Text accessibilityRole="link" style={[styles.movieTitle3, {color: '#6565e6', textDecorationLine: 'underline'}]}>{homepage}</Text>
                    </TouchableOpacity>
                    <View style={styles.separator}/>
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
        <FlatList
                data={this.props.generMovies}
                renderItem={({ item }) => <View key={item.id} style={{ width: 130 }}>
                <TouchableOpacity onPress={() => { this.props.moveDetails(item.id) }}  disabled={isDisabled}>
                    <Image
                    style={{ width: 130, height: 200, borderRadius: 5 }}
                    source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                    resizeMode="stretch"
                    />
                    <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
                    <Text style={{color: '#FFF', textAlign: 'center', fontSize: 15}}>
                        {item.title}
                    </Text>
                    <Text style={{color: '#00d374', textAlign: 'center', fontSize: 12}}>
                        {item.release_date ? item.release_date.split('-')[0] : ''}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name={'star'} iconStyle={{margin: 3}} type={'antdesign'} size={15} color="#f0c40e"/>
                        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 15}}>{item.vote_average}</Text>
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
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    generDetails: state.home.generDetails,
  };
};

export default connect(mapStateToProps, {})(GenerDetails);

