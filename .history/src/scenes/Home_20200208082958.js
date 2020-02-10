import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { getMovieGeners } from '../actions';

class Home extends Component {
  componentWillMount() {
    this.props.getMovieGeners();
  }

  renderGeners(){
    return this.props.events.map(event =>
      <TouchableOpacity key={event.id} onPress={() => this.selectEvent(event)}>
        <Card>
          <View style={{ flexDirection: 'row', backgroundColor: '#585e68', borderRadius: 3 }}>
            <View>
              {this.renderImage(event.picture)}
            </View>
            <View style={{ flexDirection: 'column' }}>
              <CardSection style={styles.cardSectionDark}>
                <Text style={styles.titleText}>{event.name}</Text>
                <Text style={styles.regularText}>{event.start}</Text>
                <Text style={styles.regularText}>{event.level} Rodeo</Text>
                <Text style={styles.regularText}>{event.city}, {event.state}</Text>
              </CardSection>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
        {this.renderGeners()}
        </Card>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    // email: state.auth.email,
  };
};

export default connect(mapStateToProps, { getMovieGeners })(Home);
