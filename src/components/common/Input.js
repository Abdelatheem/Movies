import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  return (
    <View style={[styles.containerStyle]}>
      <Text style={styles.labelStyle}>
        {props.label}
        {props.children}
      </Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        autoCorrect={false}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.inputStyle}
        maxLength={props.maxLength}
        keyboardAppearance={props.keyboardAppearance}
        keyboardType={props.keyboardType}
      />

    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 14,
    paddingLeft: 5,
    flex: 2
  },
  inputStyle: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 5,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };
