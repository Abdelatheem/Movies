import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './scenes/Welcome';
import Home from './scenes/Home';
import styles from './common/Styles';
import {  StatusBar, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons';

class TabIcon extends Component {
  render() {

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <FontAwesome.Icon style={{color: '#FFF'}} name={this.props.iconName || "circle"} size={18}/>
      </View>
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
                    title="Home"
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
