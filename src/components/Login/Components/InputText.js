import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';

const InputText = (props) => {
  return (
    <View style={[styles.textInputContainer, props.style]}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <View
        style={[
          styles.textInputBox,
          {
            borderColor: props.isError ? '#F14962' : '#ccc',
          },
        ]}>
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          placeholderTextColor="lightgrey" 
          style={styles.textInputStyle}
          maxLength={props.maxLength}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');
const fontMedium = 'Roboto-Medium';

const styles = StyleSheet.create({
  textInputContainer: {
    width: width - 40,
    alignSelf: 'center',
    backgroundColor: '#FFF',

  },

  textInputLabel: {
    fontSize: 12,
    fontFamily: 'NunitoSans-Bold',
    color: '#8F8F8F',
    backgroundColor: '#fff',
    top: 8,
    left: 20,
    zIndex: 1,
    alignSelf: 'baseline',
    paddingHorizontal: 2,
  },

  textInputBox: {
    width: width - 40,
    borderWidth: 1.5,
    borderRadius: 50,
    paddingLeft: 10,
  },

  textInputStyle: {
    fontFamily: 'NunitoSans-Bold',
    color: 'black'
  },
});

export default InputText;
