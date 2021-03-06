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
    marginTop: 1,
  },
};

export { Card };
