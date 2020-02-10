import React, { Component } from 'react';
import { ActivityIndicator, Switch, Text, View, Image, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Spinner, Button } from '../components/common';
import styles from '../common/Styles';

class Setting extends Component {
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

export default connect(mapStateToProps, {})(Setting);
