import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './scenes/Welcome';
import Home from './scenes/Home';
import Search from './scenes/Search';
import Populer from './scenes/Populer';
import Setting from './scenes/Setting';
import Profile from './scenes/Profile';
import styles from './common/Styles';
import {  StatusBar, Text, View} from 'react-native'
import { Icon } from 'react-native-elements'


class TabIcon extends Component {
  render() {

    return (
      <Icon
      name={this.props.iconName}
      type={this.props.iconType}
      size={30}
      iconStyle={{marginTop: 1}}
      color="#fff"
      />
    );
  }
}

class RouterComponent extends Component {
  render(){
    return (
      <Router>
        <Scene key='root' navigationBarStyle={styles.navbarStyle}>
          <Scene key='Welcome' component={Welcome} hideNavBar initial />
          <Scene key="main" activeBackgroundColor={styles.titleStyle.activeBackgroundColor} activeTintColor={styles.titleStyle.activeColor} inactiveTintColor={styles.titleStyle.inactiveColor} hideNavBar tabs={true} tabBarStyle={styles.tabBar} default="Home">
            <Scene  key="Home"
                    title="Home"
                    iconName="home"
                    iconType="AntDesign"
                    icon={TabIcon}
                    hideNavBar
                    component={Home}
                    initial={true}
            />
             <Scene  key="Search"
                    title="Search"
                    iconName="search"
                    iconType="FontAwesome"
                    icon={TabIcon}
                    hideNavBar
                    component={Search}
                    initial={true}
            />
             <Scene  key="Populer"
                    title="Populer"
                    iconName="heart"
                    iconType="AntDesign"
                    icon={TabIcon}
                    hideNavBar
                    component={Populer}
                    initial={true}
            />
             <Scene  key="Setting"
                    title="Setting"
                    iconName="settings"
                    iconType="AntDesign"
                    icon={TabIcon}
                    hideNavBar
                    component={Setting}
                    initial={true}
            />
             <Scene  key="Profile"
                    title="Profile"
                    iconName="users"
                    iconType="AntDesign"
                    icon={TabIcon}
                    hideNavBar
                    component={Profile}
                    initial={true}
            />
            </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
