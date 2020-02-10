import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './scenes/Welcome';
import Home from './scenes/Home';
import styles from './common/Styles';
import {  StatusBar, Text, View} from 'react-native'
import { Icon } from 'react-native-elements'


class TabIcon extends Component {
  render() {

    return (
      <Icon
      name={this.props.iconName}
      type='font-awesome'
      color='#f50'
      onPress={() => console.log('hello')} />
    );
  }
}

class RouterComponent extends Component {
  render(){
    return (
      <Router>
        <Scene key='root' navigationBarStyle={styles.navbarStyle} titleStyle={styles.titleStyle}>
          <Scene key='Welcome' component={Welcome} hideNavBar initial />
          <Scene key="main" hideNavBar tabs={true} tabBarStyle={styles.tabBar} default="Home">
            <Scene  key="Home"
                    title=""
                    iconName="home"
                    icon={TabIcon}
                    hideNavBar
                    component={Home}
                    initial={true}
            />
            </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
