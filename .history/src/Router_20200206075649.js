import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Welcome from './scenes/Welcome';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' navigationBarStyle={styles.navbarStyle} titleStyle={styles.titleStyle}>
        <Scene key='Welcome' component={Welcome} hideNavBar initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
