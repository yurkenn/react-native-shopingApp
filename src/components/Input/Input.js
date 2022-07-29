import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({placeholder, onType, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
      />
    </View>
  );
};

export default Input;
