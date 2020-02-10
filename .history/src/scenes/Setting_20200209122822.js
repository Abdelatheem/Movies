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

  render() {
    return (
      <ScrollView style={styles.container}>
          <Text style={styles.movieTitle}>Settings</Text>
          <View style={styles.separator}/>
          {this.renderErrorMessage()}
          <Card>
          <Text style={styles.movieTitle1}>Choose App Directions</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.settingTitle}>{this.state.Directions ? 'Left To Right' : 'Right To Left'}</Text>
          <Switch trackColor={{true: "#00d374", false: '#cccccc'}} style={{marginStart: '2%'}} onValueChange = {()=> this.changeDirections()} value = {this.state.Directions}/>
          </View>
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

export default connect(mapStateToProps, {})(Setting);
