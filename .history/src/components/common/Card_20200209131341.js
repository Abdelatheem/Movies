import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
  },
};

export { Card };
