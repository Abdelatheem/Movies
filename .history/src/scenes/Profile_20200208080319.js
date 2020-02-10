import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';

class Profile extends Component {
  componentWillMount() {
    try {
      AsyncStorage.getItem('email').then((email) => this.props.emailChanged(email));
      AsyncStorage.getItem('password').then((password) => this.props.passwordChanged(password));
    } finally {
      //console.log('Could not retrieve email/password from storage');
    }
  }

  // onEmailChange(text) {
  //   this.props.emailChanged(text);
  // }
  // onPasswordChange(text) {
  //   this.props.passwordChanged(text);
  // }
  // login() {
  //   const { email, password } = this.props;
  //   try {
  //     AsyncStorage.setItem('email', email);
  //     AsyncStorage.setItem('password', password);
  //   } finally {
  //     //Do nothing (fail silently!)
  //   }
  //   this.props.loginUser({ email, password });
  // }
  renderErrorMessage() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return <Button style={{ borderRadius: 20 }} buttonText='Login' />;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <Image source={require('../resources/images/logo.png')} style={{ alignSelf: 'center', width: '50%', resizeMode: 'contain' }} />
          {this.renderErrorMessage()}
          <View style={{ paddingTop: 40 }}>
          <Button style={styles.orangeButton} buttonText={'Get Started'} onPress={() => Actions.Home()} />
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

export default connect(mapStateToProps, {})(Profile);
