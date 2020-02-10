import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
      <TouchableOpacity onPress={props.onPress} style={[styles.button, props.style]}>
        <Text style={styles.textStyle}>{props.buttonText}</Text>
      </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#25AAE0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1d7ba3',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Arial',
  },
};

export { Button };
