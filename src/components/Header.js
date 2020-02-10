import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      //<Text style={textStyle}>{props.headerText}</Text>
      <Image style={styles.logoStyle} source={{ uri: 'https://www.offcourtbocce.com/images/ocbc_logo_small.png' }} />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    paddingTop: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,

  },
  logoStyle: {
    height: 47,
    width: 150,
  }
};

export default Header;
