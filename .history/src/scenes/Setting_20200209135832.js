import React, { Component } from 'react';
import { ActivityIndicator, Platform, I18nManager, Switch, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';
import { changeDirections, changeMode } from '../actions';

const isRTL = Platform === "ios" ? this.state.isRTL : I18nManager.isRTL;
class Setting extends Component {
  constructor(props){
    super(props);
    this.state ={
      Directions: this.props.Directions == 'LTR' ? true : false,
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
    if(this.state.Directions){
      this.props.changeDirections('LTR');
    } else {
      this.props.changeDirections('RTL');
    }
  }

  changeMode(){
    this.setState({Mode: !this.state.Mode})
    if(this.state.Mode){
      this.props.changeMode('Dark');
    } else {
      this.props.changeMode('Light');
    }
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
          <Text style={styles.movieTitle2}>{this.state.Directions ? 'Left To Right' : 'Right To Left'}</Text>
          <Switch trackColor={{true: null, false: '#5e5d5d'}} style={{marginStart: '2%',marginTop: 4}} onValueChange = {()=> this.changeDirections()} value = {this.state.Directions}/>
          </View>
          {/* <View style={styles.separator}/>
          <Text style={styles.movieTitle1}>Choose App Mode</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.movieTitle2}>{this.state.Mode ? 'Dark Mode' : 'Light Mode'}</Text>
          <Switch trackColor={{true: null, false: '#5e5d5d'}} style={{marginStart: '2%',marginTop: 4}} onValueChange = {()=> this.changeMode()} value = {this.state.Mode}/>
          </View> */}
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

export default connect(mapStateToProps, { changeDirections, changeMode })(Setting);
