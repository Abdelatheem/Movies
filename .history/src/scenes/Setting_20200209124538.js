import React, { Component } from 'react';
import { ActivityIndicator, Switch, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';

class Setting extends Component {
  constructor(props){
    super(props);
    this.state ={
      Directions: true,
      Mode: true
    }
  }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  changeDirections(){
    this.setState({Directions: !this.state.Directions})
  }

  changeMode(){
    this.setState({Mode: !this.state.Mode})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <Text style={styles.movieTitle}>Settings</Text>
          <View style={styles.separator}/>
          {this.renderErrorMessage()}
          <Card>
          <Text style={styles.movieTitle1}>Choose App Directions</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.movieTitle2}>{this.props.Directions == 'LTR' ? 'Left To Right' : 'Right To Left'}</Text>
          <Switch trackColor={{true: null, false: '#5e5d5d'}} style={{marginStart: '2%',marginTop: 4}} onValueChange = {()=> this.changeDirections()} value = {this.state.Directions == 'LTR' ? true : false}/>
          </View>
          <View style={styles.separator}/>
          <Text style={styles.movieTitle1}>Choose App Mode</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.movieTitle2}>{this.state.Mode == 'Dark' ? 'Dark Mode' : 'Light Mode'}</Text>
          <Switch trackColor={{true: null, false: '#5e5d5d'}} style={{marginStart: '2%',marginTop: 4}} onValueChange = {()=> this.changeMode()} value = {this.state.Mode == 'Dark' ? true : false}/>
          </View>
          </Card>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    Directions: state.setting.Directions,
    Mode: state.setting.Mode,
  };
};

export default connect(mapStateToProps, {})(Setting);
